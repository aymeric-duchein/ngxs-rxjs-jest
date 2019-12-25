import {Component} from '@angular/core';
import {Issue, IssueStatus} from '../core/issue/issue.model';
import {IssueState} from '../core/issue/issue.state';
import {Observable} from 'rxjs';
import {Select} from '@ngxs/store';

export const doneIssueSelector = IssueState.getIssuesByStatus(IssueStatus.DONE);
export const todoIssueSelector = IssueState.getIssuesByStatus(IssueStatus.TODO);
export const inProgressIssueSelector = IssueState.getIssuesByStatus(IssueStatus.IN_PROGRESS);

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  private readonly IssueStatus = IssueStatus;

  @Select(doneIssueSelector) doneIssues$: Observable<Issue[]>;
  @Select(todoIssueSelector) todoIssues$: Observable<Issue[]>;
  @Select(inProgressIssueSelector) inPRIssues$: Observable<Issue[]>;

  constructor() {
  }
}

