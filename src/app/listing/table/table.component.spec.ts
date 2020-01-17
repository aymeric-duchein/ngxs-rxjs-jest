import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TableComponent} from './table.component';
import {NgxsModule, Store} from '@ngxs/store';
import {Subject} from 'rxjs';
import {Issue} from '@src/app/core/issue/issue.model';
import {MockComponent, MockModule} from 'ng-mocks';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {mockSelect} from '@ngxs-labs/testing/jest';
import {IssueState} from '@src/app/core/issue/issue.state';
import {By} from '@angular/platform-browser';
import {ListingIssueClick} from '@src/app/listing/listing.actions';
import {IssueComponent} from '@src/app/shared/issue/issue.component';
import {MOCK_DONE_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_TODO_ISSUE} from '@mocks/issue.mock';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  let store: Store;
  let getFilteredIssues$: Subject<Issue[]>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent, MockComponent(IssueComponent)],
      imports: [
        NgxsModule.forRoot(),
        MockModule(MatButtonModule),
        MockModule(MatMenuModule),
        MockModule(MatIconModule),
      ]
    });

    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');

    getFilteredIssues$ = mockSelect(IssueState.getFilteredIssues as any);
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should display issues', () => {
    getFilteredIssues$.next([MOCK_TODO_ISSUE, MOCK_DONE_ISSUE, MOCK_IN_PROGRESS_ISSUE]);
    fixture.detectChanges();
    const issues = fixture.debugElement.queryAll(By.css('app-issue'));
    expect(issues.length).toEqual(3);
    expect(fixture).toMatchSnapshot();
  });

  test('should dispatch click action on click', () => {
    getFilteredIssues$.next([MOCK_TODO_ISSUE, MOCK_DONE_ISSUE, MOCK_IN_PROGRESS_ISSUE]);
    fixture.detectChanges();
    const issue = fixture.debugElement.query(By.css('app-issue'));
    issue.triggerEventHandler('issueClick', MOCK_TODO_ISSUE);
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new ListingIssueClick(MOCK_TODO_ISSUE));
  });
});
