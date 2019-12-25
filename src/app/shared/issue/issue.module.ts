import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IssueComponent} from './issue.component';
import {MatCardModule, MatIconModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [IssueComponent],
  exports: [IssueComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule,
  ],
})
export class IssueModule {
}
