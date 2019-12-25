import {Component, OnDestroy, OnInit} from '@angular/core';
import {Actions, ofActionDispatched, Store} from '@ngxs/store';
import {MatDialog} from '@angular/material';
import {Subject} from 'rxjs';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import {IssueUpsertComponent} from './issue-upsert/issue-upsert.component';
import {Issue} from '../issue/issue.model';
import {OpenIssueModal} from '../issue/issue.actions';
import {IssueUpsertClosed} from './modal.action';

@Component({
  selector: 'app-modal',
  template: ''
})
export class ModalComponent implements OnInit, OnDestroy {

  isDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly actions: Actions, private readonly dialog: MatDialog, private readonly store: Store) {
  }

  ngOnInit() {
    this.actions.pipe(
      takeUntil(this.isDestroyed$),
      ofActionDispatched(OpenIssueModal),
      switchMap((action: OpenIssueModal) =>
        this.dialog.open(
          IssueUpsertComponent,
          {data: {issue: action.issue}, disableClose: true, height: '600px', width: '500px'}).afterClosed()
      ),
      filter((issue: Issue) => !!issue)
    ).subscribe((issue: Issue) => {
      this.store.dispatch(new IssueUpsertClosed(issue));
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
