import {Issue} from '../issue/issue.model';

export class SnackbarUndoIssueUpdate {
  static readonly type = '[Snackbar] Issue update undo';

  constructor(public issue: Issue) {
  }
}
