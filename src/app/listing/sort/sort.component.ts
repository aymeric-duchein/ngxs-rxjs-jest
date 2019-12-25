import {Component} from '@angular/core';
import {IssueSortCriteria, SortKey} from '../../core/issue/issue.model';
import {IssueState} from '../../core/issue/issue.state';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {SortOptionClick} from '../listing.actions';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
})
export class SortComponent {
  @Select(IssueState.getSortCriteria) sortCriteria$: Observable<IssueSortCriteria>;
  sortKey = SortKey;

  constructor(private readonly store: Store) {
  }

  sortOptionClick(event: SortKey) {
    this.store.dispatch(new SortOptionClick(event));
  }
}
