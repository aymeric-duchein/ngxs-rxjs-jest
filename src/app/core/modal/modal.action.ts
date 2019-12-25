import {Issue} from '../issue/issue.model';

export class IssueUpsertClosed {
  static readonly type = '[MODAL] issue upsert modal closed';

  constructor(public issue: Issue) {
  }
}
