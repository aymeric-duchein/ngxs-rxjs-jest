import {ComponentFixture, TestBed} from '@angular/core/testing';

import * as ngxs from '@ngxs/store';
import {NgxsModule, Store} from '@ngxs/store';
import {OpenIssueModal} from '@src/app/core/issue/issue.actions';
import {MOCK_TODO_ISSUE} from '@mocks/issue.mock';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {filter} from 'rxjs/operators';
import {MockModule} from 'ng-mocks';
import {SnackbarComponent} from '@src/app/core/snackbar/snackbar.component';
import {DisplayNotification} from '@src/app/core/user/user.actions';
import {SnackbarUndoIssueUpdate} from '@src/app/core/snackbar/snackbar.actions';
import {MOCK_ACTIONS, MOCK_ACTIONS_PROVIDER, MOCK_MAT_SNACKBAR_ON_ACTION, MOCK_MAT_SNACKBAR_PROVIDER} from '@mocks/provider.mock';

describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;
  let store: Store;
  let snackBar: MatSnackBar;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarComponent],
      imports: [NgxsModule.forRoot(), MockModule(MatSnackBarModule)],
      providers: [
        MOCK_MAT_SNACKBAR_PROVIDER,
        MOCK_ACTIONS_PROVIDER
      ]
    });

    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
    jest.spyOn(ngxs, 'ofActionDispatched')
    .mockImplementation((actionClass) => filter((action: any) => action.constructor.type === actionClass.type));
    snackBar = TestBed.get(MatSnackBar);

    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should open snackbar on DisplayNotification action dispatched', () => {
    MOCK_ACTIONS.next(new DisplayNotification(MOCK_TODO_ISSUE));

    expect(snackBar.open).toHaveBeenCalledWith('Issue updated', 'Undo', {duration: 3000});
  });

  test('should not open snackbar on other action dispatched', () => {
    MOCK_ACTIONS.next(new OpenIssueModal(MOCK_TODO_ISSUE));

    expect(snackBar.open).not.toHaveBeenCalled();
  });

  test('should dispatch action on snackbar action', () => {
    MOCK_ACTIONS.next(new DisplayNotification(MOCK_TODO_ISSUE));
    MOCK_MAT_SNACKBAR_ON_ACTION.next();

    expect(store.dispatch).toHaveBeenCalledWith(new SnackbarUndoIssueUpdate(MOCK_TODO_ISSUE));
  });

});
