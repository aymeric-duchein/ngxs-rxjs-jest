import {User} from './user.model';
import {Issue} from '../issue/issue.model';

export class SignInSuccess {
  static readonly type = '[USER] Sign in success';

  constructor(public user: User) {
  }
}

export class SignInError {
  static readonly type = '[USER] Sign in error';
}

export class DisplayNotification {
  static readonly type = '[USER] Display notification';

  constructor(public issue: Issue) {
  }
}
