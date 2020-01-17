import {Component} from '@angular/core';
import {SortKey} from '../../core/issue/issue.model';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
})
export class SortComponent {

  sortKey = SortKey;

  constructor() {
  }

  sortOptionClick(event: SortKey) {
  }
}
