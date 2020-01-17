import {Component} from '@angular/core';
import {IssueState} from '../../core/issue/issue.state';
import {Observable} from 'rxjs';
import {Issue} from '../../core/issue/issue.model';
import {Select, Store} from '@ngxs/store';
import {ListingIssueClick} from '../listing.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  @Select(IssueState.getFilteredIssues) issues$: Observable<Issue[]>;

  constructor(private readonly store: Store) {
  }

  issueClick(issue: Issue) {
    this.store.dispatch(new ListingIssueClick(issue));
  }
}
