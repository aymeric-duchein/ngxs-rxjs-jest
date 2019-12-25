import {LoginService} from './login.service';
import {User} from '@src/app/core/user/user.model';

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  const observables = jest.requireActual('rxjs');
  operators.delay = jest.fn(delay => s =>
    s.pipe(operators.delayWhen(() => observables.timer(delay)))
  );
  return operators;
});

describe('LoginService', () => {
  let service: LoginService;
  beforeEach(() => {
    service = new LoginService();
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test('should connect user after delay if valid', () => {
    jest.useFakeTimers();
    let user: User;
    service.signIn('user', 'pass').subscribe(signInUser => user = signInUser);
    jest.advanceTimersByTime(499);
    expect(user).toBeUndefined();
    jest.advanceTimersByTime(1);
    expect(user).toEqual({
      name: 'user',
      avatarUrl: 'https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png',
      notifications: true
    });
    jest.useRealTimers();
  });

  test('should throw error if not valid', () => {
    let error: string;
    service.signIn('fake', 'pass').subscribe(() => {
    }, err => error = err);
    expect(error).toEqual('fake user detected');
  });
});
