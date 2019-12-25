import {USER_STATE_NAME, UserState} from './user.state';
import {NgxsTestBed} from '@ngxs-labs/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {SignOutButtonClick} from '@src/app/core/header/header.action';
import {Navigate, RouterNavigation} from '@ngxs/router-plugin';
import {RoutesNames} from '@src/app/app-routing.const';
import {of, throwError} from 'rxjs';
import {MOCK_USER} from '@mocks/user.mock';
import {SignInButtonClick} from '@src/app/login/login.action';
import {DisplayNotification, SignInError, SignInSuccess} from '@src/app/core/user/user.actions';
import {UserSettingsUpdate} from '@src/app/settings/settings.actions';
import {BoardIssueDropped} from '@src/app/board/board.actions';
import {MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {IssueStatus} from '@src/app/core/issue/issue.model';
import {MOCK_LOGIN_SERVICE, MOCK_LOGIN_SERVICE_PROVIDER} from '@mocks/provider.mock';

describe('User actions', () => {
  let userStateContext;
  let dispatch;
  beforeEach(() => {

    const ngxsTestBed = NgxsTestBed.configureTestingStates({
      states: [UserState],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [
        MOCK_LOGIN_SERVICE_PROVIDER
      ]
    });

    dispatch = ngxsTestBed.dispatch;
    userStateContext = ngxsTestBed.getStateContextMocks[USER_STATE_NAME];
  });

  test('should sign out and redirect', () => {
    dispatch(new SignOutButtonClick());
    expect(userStateContext.setState).toHaveBeenCalledWith({});
    expect(userStateContext.dispatch).toHaveBeenCalledWith(new Navigate([RoutesNames.LOGIN]));
  });

  test('should trigger sign in on success', () => {
    MOCK_LOGIN_SERVICE.signIn.mockReturnValue(of(MOCK_USER));
    dispatch(new SignInButtonClick('test', 'pass'));
    expect(userStateContext.dispatch).toHaveBeenCalledWith(new SignInSuccess(MOCK_USER));
  });

  test('should trigger error on error', () => {
    MOCK_LOGIN_SERVICE.signIn.mockReturnValue(throwError('error'));
    dispatch(new SignInButtonClick('test', 'pass'));
    expect(userStateContext.dispatch).toHaveBeenCalledWith(new SignInError());
    expect(userStateContext.dispatch).toHaveBeenCalledWith(expect.any(SignInError));
  });

  test('should sign in and redirect', () => {
    dispatch(new SignInSuccess(MOCK_USER));
    expect(userStateContext.setState).toHaveBeenCalledWith({user: MOCK_USER});
    expect(userStateContext.dispatch).toHaveBeenCalledWith(new Navigate([RoutesNames.BOARD]));
  });

  test('should set error', () => {
    dispatch(new SignInError());
    expect(userStateContext.patchState).toHaveBeenCalledWith({error: 'Invalid username/password'});
  });

  test('should update user settings', () => {
    userStateContext.getState.mockReturnValue({user: MOCK_USER});
    const partialUser = {avatarUrl: 'another_fake_url', notifications: false};
    dispatch(new UserSettingsUpdate({avatarUrl: 'another_fake_url', notifications: false}));
    expect(userStateContext.patchState).toHaveBeenCalledWith({user: {...MOCK_USER, ...partialUser}});
  });

  test('should display notification', () => {
    userStateContext.getState.mockReturnValue({user: MOCK_USER});
    dispatch(new BoardIssueDropped(MOCK_TODO_ISSUE, IssueStatus.DONE));
    expect(userStateContext.dispatch).toHaveBeenCalledWith(new DisplayNotification(MOCK_TODO_ISSUE));
  });

  test('should display notification when notification deactivated', () => {
    userStateContext.getState.mockReturnValue({user: {...MOCK_USER, notifications: false}});
    dispatch(new BoardIssueDropped(MOCK_TODO_ISSUE, IssueStatus.DONE));
    expect(userStateContext.dispatch).not.toHaveBeenCalledWith(expect.any(DisplayNotification));
  });

  test('should clear login error when on login page', () => {
    userStateContext.getState.mockReturnValue({user: MOCK_USER});
    dispatch(new RouterNavigation({url: RoutesNames.LOGIN}, null));
    expect(userStateContext.setState).toHaveBeenCalledWith({user: MOCK_USER});
  });

  test('should not clear login error when on other page', () => {
    userStateContext.getState.mockReturnValue({user: MOCK_USER});
    dispatch(new RouterNavigation({url: RoutesNames.BOARD}, null));
    expect(userStateContext.setState).not.toHaveBeenCalled();
  });

  test('should return user', () => {
    expect(UserState.getUser({user: MOCK_USER, error: 'error'}))
    .toEqual(MOCK_USER);
  });

  test('should return error', () => {
    expect(UserState.getError({user: MOCK_USER, error: 'error'}))
    .toEqual('error');
  });

  test('should return authentication state when authenticated', () => {
    expect(UserState.isAuthenticated({}, MOCK_USER))
    .toEqual(true);
  });

  test('should return authentication state when authenticated', () => {
    expect(UserState.isAuthenticated({}, undefined))
    .toEqual(false);
  });

  test('should return user name', () => {
    expect(UserState.getUserName({}, MOCK_USER))
    .toEqual(MOCK_USER.name);
  });

  test('should return user avatar url', () => {
    expect(UserState.getAvatarUrl({}, MOCK_USER))
    .toEqual(MOCK_USER.avatarUrl);
  });

  test('should return user notifications setting', () => {
    expect(UserState.getNotifications({}, MOCK_USER))
    .toEqual(MOCK_USER.notifications);
  });

});
