import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BoardComponent, doneIssueSelector, inProgressIssueSelector, todoIssueSelector} from './board.component';
import {Issue} from '@src/app/core/issue/issue.model';
import {Subject} from 'rxjs';
import {mockSelect} from '@ngxs-labs/testing/jest';
import {MOCK_DONE_ISSUE, MOCK_IN_PROGRESS_ISSUE, MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {MockComponent, MockModule} from 'ng-mocks';
import {ListComponent} from '@src/app/board/list/list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgxsModule} from '@ngxs/store';
import {AddModule} from '@src/app/shared/add/add.module';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;
  let doneIssueSelector$: Subject<Issue[]>;
  let todoIssueSelector$: Subject<Issue[]>;
  let inProgressIssueSelector$: Subject<Issue[]>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BoardComponent,
        MockComponent(ListComponent),
      ],
      imports: [
        NgxsModule.forRoot(),
        MockModule(DragDropModule),
        MockModule(AddModule)
      ]
    });

    doneIssueSelector$ = mockSelect(doneIssueSelector);
    todoIssueSelector$ = mockSelect(todoIssueSelector);
    inProgressIssueSelector$ = mockSelect(inProgressIssueSelector);
    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    doneIssueSelector$.next([MOCK_DONE_ISSUE]);
    todoIssueSelector$.next([MOCK_TODO_ISSUE]);
    inProgressIssueSelector$.next([MOCK_IN_PROGRESS_ISSUE]);

    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
    expect(fixture).toMatchSnapshot();
  });
});
