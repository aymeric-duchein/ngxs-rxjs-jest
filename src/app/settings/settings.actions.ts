import {User} from '../core/user/user.model';

export class UserSettingsUpdate {
  static readonly type = '[SETTINGS] User notifications update';

  constructor(public partialUser: Partial<User>) {
  }
}
