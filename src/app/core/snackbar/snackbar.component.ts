import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {Actions, ofActionDispatched, Store} from '@ngxs/store';
import {MatSnackBar} from '@angular/material';
import {mapTo, switchMap, takeUntil} from 'rxjs/operators';
import {Issue} from '../issue/issue.model';
import {SnackbarUndoIssueUpdate} from './snackbar.actions';
import {DisplayNotification} from '../user/user.actions';

@Component({
  selector: 'app-snackbar',
  template: ''
})
export class SnackbarComponent implements OnInit, OnDestroy {

  isDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly actions: Actions, private readonly snackBar: MatSnackBar, private readonly store: Store) {
  }

  ngOnInit() {
    this.actions.pipe(
      takeUntil(this.isDestroyed$),
      ofActionDispatched(DisplayNotification),
      switchMap(({issue}: DisplayNotification) =>
        this.snackBar.open('Issue updated', 'Undo', {duration: 3000}).onAction().pipe(
          mapTo(issue)
        )
      ),
    ).subscribe((issue: Issue) => {
      this.store.dispatch(new SnackbarUndoIssueUpdate(issue));
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }

}
