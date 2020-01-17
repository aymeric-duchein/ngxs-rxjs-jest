import {Issue, SortKey} from '../core/issue/issue.model';

export class ListingIssueClick {
  static readonly type = '[LISTING] Issue click';

  constructor(public issue: Issue) {
  }
}

export class SearchFormUpdated {
  static readonly type = '[LISTING] Search updated';

  constructor(public search: string) {
  }
}
