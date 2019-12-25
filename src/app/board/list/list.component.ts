import {Component, Input} from '@angular/core';
import {Issue, IssueStatus} from '../../core/issue/issue.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Store} from '@ngxs/store';
import {BoardIssueClick, BoardIssueDropped} from '../board.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() status: IssueStatus;
  @Input() issues: Issue[];

  constructor(private readonly store: Store) {
  }

  drop(event: CdkDragDrop<Issue[], Issue[]>) {
    this.store.dispatch(new BoardIssueDropped(event.item.data, this.status));
  }

  issueClick(issue: Issue) {
    this.store.dispatch(new BoardIssueClick(issue));
  }
}
