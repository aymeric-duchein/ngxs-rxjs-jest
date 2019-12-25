import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Issue, IssueColor, IssueStatus} from '../../issue/issue.model';
import {UserState} from '../../user/user.state';
import {Store} from '@ngxs/store';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as uuid from 'uuid';
import {getIssueColors} from '../../issue/issue.utils';

@Component({
  selector: 'app-issue-upsert',
  templateUrl: './issue-upsert.component.html',
  styleUrls: ['./issue-upsert.component.scss']
})
export class IssueUpsertComponent implements OnInit {
  status = IssueStatus;
  formGroup: FormGroup;
  colors = getIssueColors;

  constructor(private readonly dialogRef: MatDialogRef<IssueUpsertComponent>,
              private readonly store: Store,
              private readonly formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: { issue: Issue }) {
  }

  ngOnInit() {
    if (!this.data || !this.data.issue) {
      this.data = {
        issue: {
          author: this.store.selectSnapshot(UserState.getUserName),
          authorAvatar: this.store.selectSnapshot(UserState.getAvatarUrl),
          id: uuid.v4(),
          date: new Date().toISOString(),
          name: '',
          description: '',
          status: IssueStatus.TODO,
          color: IssueColor.color15,
        }
      };
    }
    this.formGroup = this.formBuilder.group({
      name: [this.data.issue.name, Validators.required],
      description: this.data.issue.description,
      status: this.data.issue.status,
      color: this.data.issue.color,
    });
  }

  changeColor(color: IssueColor) {
    this.formGroup.get('color').setValue(color);
  }

  cancel() {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({...this.data.issue, ...this.formGroup.getRawValue()});
  }

}
