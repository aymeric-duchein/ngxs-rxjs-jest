import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Issue} from '../../core/issue/issue.model';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.scss']
})
export class IssueComponent {

  @Input() issue: Issue;

  @Output() issueClick: EventEmitter<Issue> = new EventEmitter<Issue>();

  emitIssue() {
    this.issueClick.emit(this.issue);
  }
}
