import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BoardComponent} from './board.component';
import {ListComponent} from './list/list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {IssueModule} from '../shared/issue/issue.module';
import {AddModule} from '../shared/add/add.module';

@NgModule({
  declarations: [BoardComponent, ListComponent],
  imports: [
    CommonModule,
    DragDropModule,
    IssueModule,
    AddModule,
  ]
})
export class BoardModule {
}
