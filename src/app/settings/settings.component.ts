import {Component, OnDestroy, OnInit} from '@angular/core';
import {IssueStatus} from '../core/issue/issue.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';
import {Store} from '@ngxs/store';
import {UserState} from '../core/user/user.state';
import {takeUntil} from 'rxjs/operators';
import {UserSettingsUpdate} from './settings.actions';
import {User} from '../core/user/user.model';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
  status = IssueStatus;
  formGroup: FormGroup;
  isDestroyed$: Subject<boolean> = new Subject<boolean>();

  constructor(private readonly store: Store,
              private readonly formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    const userNotification = this.store.selectSnapshot(UserState.getNotifications);
    const userAvatar = this.store.selectSnapshot(UserState.getAvatarUrl);
    this.formGroup = this.formBuilder.group({
      avatarUrl: userAvatar,
      notifications: userNotification,
    });

    this.formGroup.valueChanges.pipe(
      takeUntil(this.isDestroyed$),
    ).subscribe((partialUser: Partial<User>) => {
      this.store.dispatch(new UserSettingsUpdate(partialUser));
    });
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next(true);
    this.isDestroyed$.complete();
  }
}
