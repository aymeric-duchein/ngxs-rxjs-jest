export class SignInButtonClick {
  static readonly type = '[LOGIN] Sign in button click';

  constructor(public username: string, public password: string) {
  }
}
