import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListingComponent} from './listing.component';
import {SearchComponent} from './search/search.component';
import {SortComponent} from './sort/sort.component';
import {TableComponent} from './table/table.component';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IssueModule} from '../shared/issue/issue.module';
import {AddModule} from '../shared/add/add.module';

@NgModule({
  declarations: [ListingComponent, SearchComponent, SortComponent, TableComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    IssueModule,
    AddModule,
  ]
})
export class ListingModule {
}
