import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatOptionModule,
  MatSelectModule
} from '@angular/material';
import {ModalComponent} from './modal.component';
import {IssueUpsertComponent} from './issue-upsert/issue-upsert.component';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ModalComponent, IssueUpsertComponent],
  entryComponents: [IssueUpsertComponent],
  exports: [ModalComponent, IssueUpsertComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatOptionModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
  ],
})
export class ModalModule {
}
