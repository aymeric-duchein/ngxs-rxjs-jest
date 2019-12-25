import {Component} from '@angular/core';
import {Store} from '@ngxs/store';
import {AddHttpIssueBtnClick, AddIssueBtnClick} from '../../core/header/header.action';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(private readonly store: Store) {
  }

  addIssue() {
    this.store.dispatch(new AddIssueBtnClick());
  }

  addHttpIssue() {
    this.store.dispatch(new AddHttpIssueBtnClick());
  }
}
