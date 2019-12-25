import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ModalComponent} from './modal.component';
import * as ngxs from '@ngxs/store';
import {NgxsModule, Store} from '@ngxs/store';
import {OpenIssueModal} from '@src/app/core/issue/issue.actions';
import {MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {MatDialog} from '@angular/material';
import {IssueUpsertComponent} from '@src/app/core/modal/issue-upsert/issue-upsert.component';
import {IssueUpsertClosed} from '@src/app/core/modal/modal.action';
import {filter} from 'rxjs/operators';
import {DisplayNotification} from '@src/app/core/user/user.actions';
import {MOCK_ACTIONS, MOCK_ACTIONS_PROVIDER, MOCK_MAT_DIALOG_AFTER_CLOSED, MOCK_MAT_DIALOG_PROVIDER} from '@mocks/provider.mock';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let store: Store;
  let dialog: MatDialog;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [NgxsModule.forRoot()],
      providers: [
        MOCK_MAT_DIALOG_PROVIDER,
        MOCK_ACTIONS_PROVIDER
      ]
    });

    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
    jest.spyOn(ngxs, 'ofActionDispatched')
    .mockImplementation((actionClass) => filter((action: any) => action.constructor.type === actionClass.type));
    dialog = TestBed.get(MatDialog);

    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should open modal on OpenIssueModal action dispatched', () => {
    MOCK_ACTIONS.next(new OpenIssueModal(MOCK_TODO_ISSUE));

    expect(dialog.open).toHaveBeenCalledWith(IssueUpsertComponent, {
      data: {issue: MOCK_TODO_ISSUE},
      disableClose: true,
      height: '600px',
      width: '500px'
    });
  });

  test('should not open modal on other action dispatched', () => {
    MOCK_ACTIONS.next(new DisplayNotification(MOCK_TODO_ISSUE));

    expect(dialog.open).not.toHaveBeenCalled();
  });

  test('should dispatch action on modal close with issue', () => {
    MOCK_ACTIONS.next(new OpenIssueModal(MOCK_TODO_ISSUE));
    MOCK_MAT_DIALOG_AFTER_CLOSED.next(MOCK_TODO_ISSUE);

    expect(store.dispatch).toHaveBeenCalledWith(new IssueUpsertClosed(MOCK_TODO_ISSUE));
  });

  test('should not dispatch action on modal close without action', () => {
    MOCK_ACTIONS.next(new OpenIssueModal(MOCK_TODO_ISSUE));
    MOCK_MAT_DIALOG_AFTER_CLOSED.next(null);

    expect(store.dispatch).not.toHaveBeenCalledWith(expect.any(IssueUpsertClosed));
  });
});
