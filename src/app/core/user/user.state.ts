import {Action, Selector, State, StateContext} from '@ngxs/store';
import {User} from './user.model';
import {Router} from '@angular/router';
import {LoginService} from '../../login/login.service';
import {catchError, switchMap} from 'rxjs/operators';
import {DisplayNotification, SignInError, SignInSuccess} from './user.actions';
import {Navigate, RouterNavigation} from '@ngxs/router-plugin';
import {UserSettingsUpdate} from '../../settings/settings.actions';
import {RoutesNames} from '../../app-routing.const';
import {SignOutButtonClick} from '../header/header.action';
import {SignInButtonClick} from '../../login/login.action';
import {BoardIssueDropped} from '../../board/board.actions';

export interface UserStateModel {
  user?: User;
  error?: string;
}

export const USER_STATE_NAME = 'user';
export const DEFAULT_USER = {};

@State<UserStateModel>({
  name: USER_STATE_NAME,
  defaults: DEFAULT_USER
})
export class UserState {

  constructor(private readonly router: Router, private readonly loginService: LoginService) {
  }

  @Selector()
  static getUser(state: UserStateModel): User {
    return state.user;
  }

  @Selector()
  static getError(state: UserStateModel): string {
    return state.error;
  }

  @Selector([UserState.getUser])
  static isAuthenticated(_, user: User): boolean {
    return !!user;
  }

  @Selector([UserState.getUser])
  static getUserName(_, user: User): string {
    return user.name;
  }

  @Selector([UserState.getUser])
  static getAvatarUrl(_, user: User): string {
    return user.avatarUrl;
  }

  @Selector([UserState.getUser])
  static getNotifications(_, user: User): boolean {
    return user.notifications;
  }

  @Action(SignOutButtonClick)
  signOut({setState, dispatch}: StateContext<UserStateModel>) {
    setState({});
    return dispatch(new Navigate([RoutesNames.LOGIN]));
  }

  @Action(SignInButtonClick)
  signIn({dispatch}: StateContext<UserStateModel>, {username, password}: SignInButtonClick) {
    return this.loginService.signIn(username, password).pipe(
      switchMap(user => dispatch(new SignInSuccess(user))),
      catchError(() => dispatch(new SignInError()))
    );
  }

  @Action(SignInSuccess)
  signInSuccess({setState, dispatch}: StateContext<UserStateModel>, {user}: SignInSuccess) {
    setState({user});
    return dispatch(new Navigate([RoutesNames.BOARD]));
  }

  @Action(SignInError)
  signInError({patchState}: StateContext<UserStateModel>) {
    patchState({error: 'Invalid username/password'});
  }

  @Action(UserSettingsUpdate)
  updateSettings({patchState, getState}: StateContext<UserStateModel>, {partialUser}: UserSettingsUpdate) {
    patchState({user: {...getState().user, ...partialUser}});
  }

  @Action(RouterNavigation)
  clearLoginError({getState, setState}, routerNavigation: RouterNavigation) {
    const user = getState().user;
    if (routerNavigation.routerState.url.includes(RoutesNames.LOGIN)) {
      setState({user});
    }
  }

  @Action(BoardIssueDropped)
  displayNotification({getState, dispatch}, {droppedIssue}: BoardIssueDropped) {
    const {user} = getState();
    if (user && user.notifications) {
      return dispatch(new DisplayNotification(droppedIssue));
    }
  }
}
