import {Action, Selector, State, StateContext} from '@ngxs/store';
import {User} from './user.model';
import {Router} from '@angular/router';
import {LoginService} from '../../login/login.service';
import {DisplayNotification} from './user.actions';
import {RouterNavigation} from '@ngxs/router-plugin';
import {UserSettingsUpdate} from '../../settings/settings.actions';
import {RoutesNames} from '../../app-routing.const';
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
