import {Issue} from '../issue/issue.model';

export class DisplayNotification {
  static readonly type = '[USER] Display notification';

  constructor(public issue: Issue) {
  }
}
