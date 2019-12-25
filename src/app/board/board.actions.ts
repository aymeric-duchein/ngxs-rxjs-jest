import {Issue, IssueStatus} from '../core/issue/issue.model';

export class BoardIssueClick {
  static readonly type = '[Board] Issue click';

  constructor(public issue: Issue) {
  }
}

export class BoardIssueDropped {
  static readonly type = '[Board] Issue dropped';

  constructor(public droppedIssue: Issue, public status: IssueStatus) {
  }
}
