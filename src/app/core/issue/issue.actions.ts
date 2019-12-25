import {Issue} from './issue.model';

export class OpenIssueModal {
  static readonly type = '[ISSUE] open issue modal';

  constructor(public issue: Issue) {
  }
}

export class HttpIssueSuccess {
  static readonly type = '[ISSUE] Http issue success';

  constructor(public issue: Issue) {
  }
}
