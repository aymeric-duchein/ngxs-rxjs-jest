import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ListComponent} from './list.component';
import {NgxsModule, Store} from '@ngxs/store';
import {MockComponent, MockHelper, MockModule, MockRender} from 'ng-mocks';
import {CdkDrag, CdkDropList, DragDropModule} from '@angular/cdk/drag-drop';
import {IssueComponent} from '../../shared/issue/issue.component';
import {Issue, IssueStatus} from '../../core/issue/issue.model';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {BoardIssueClick, BoardIssueDropped} from '@src/app/board/board.actions';
import {MOCK_ISSUES} from '@mocks/issue.mock';

describe('ListComponent', () => {
  let component: { issues: Issue[], status: IssueStatus };
  let fixture: ComponentFixture<{ issues: Issue[], status: IssueStatus }>;
  let store: Store;
  const mockIssues: Issue[] = MOCK_ISSUES;
  const mockStatus: IssueStatus = IssueStatus.TODO;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ListComponent,
        MockComponent(IssueComponent)
      ],
      imports: [
        NgxsModule.forRoot(),
        MockModule(DragDropModule)
      ]
    });

    fixture = MockRender('<app-list [issues]="issues" [status]="status"></app-list>',
      {
        issues: mockIssues,
        status: mockStatus
      });
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');

    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should match snapshot', () => {
    expect(fixture).toMatchSnapshot();
  });

  test('should display status', () => {
    const status: DebugElement = fixture.debugElement.query(By.css('h3'));
    expect(status).not.toBeNull();
    expect(status.nativeElement.innerHTML).toContain(IssueStatus.TODO);
  });

  test('should display a list of issues', () => {
    const issues = fixture.debugElement.queryAll(By.css('app-issue'));
    expect(issues.length).toBe(MOCK_ISSUES.length);
  });

  test('should initiate cdkDropList', () => {
    const dropList = fixture.debugElement.query(By.css('div[cdkDropList]'));
    expect(dropList).not.toBeNull();
    const cdkDropListDirective = MockHelper.getDirective(dropList, CdkDropList);
    expect(cdkDropListDirective.data).toEqual(MOCK_ISSUES);
  });

  test('should dispatch action on drop event', () => {
    const dropList = fixture.debugElement.query(By.css('div[cdkDropList]'));
    dropList.triggerEventHandler('cdkDropListDropped', {item: {data: MOCK_ISSUES[2]}});
    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(new BoardIssueDropped(MOCK_ISSUES[2], mockStatus));
  });

  test('should allow drag of issue', () => {
    const issue = fixture.debugElement.query(By.css('app-issue'));
    const cdkDragDirective = MockHelper.getDirective(issue, CdkDrag);
    expect(cdkDragDirective).not.toBeNull();
  });

  test('should pass correct data to drag', () => {
    const issue = fixture.debugElement.query(By.css('app-issue'));
    const cdkDragDirective = MockHelper.getDirective(issue, CdkDrag);
    const issueComponent = issue.componentInstance as IssueComponent;
    expect(issueComponent.issue).toEqual(MOCK_ISSUES[0]);
    expect(cdkDragDirective.data).toEqual(issueComponent.issue);
  });

  test('should dispatch action on issue click', () => {
    const issue = fixture.debugElement.query(By.css('app-issue'));
    issue.triggerEventHandler('issueClick', MOCK_ISSUES[2]);
    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(new BoardIssueClick(MOCK_ISSUES[2]));
  });
});
