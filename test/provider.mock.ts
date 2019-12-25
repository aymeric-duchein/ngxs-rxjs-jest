import {HttpClient} from '@angular/common/http';
import {LoginService} from '@src/app/login/login.service';
import {Subject} from 'rxjs';
import {Issue} from '@src/app/core/issue/issue.model';
import {MatDialog, MatDialogRef, MatSnackBar} from '@angular/material';
import {Actions} from '@ngxs/store';

export const MOCK_HTTP_CLIENT = {
  post: jest.fn()
};

export const MOCK_HTTP_CLIENT_PROVIDER = {
  provide: HttpClient,
  useValue: MOCK_HTTP_CLIENT
};

export const MOCK_LOGIN_SERVICE = {
  signIn: jest.fn()
};

export const MOCK_LOGIN_SERVICE_PROVIDER = {
  provide: LoginService,
  useValue: MOCK_LOGIN_SERVICE
};

export const MOCK_MAT_DIALOG_AFTER_CLOSED = new Subject<Issue>();
export const MOCK_MAT_DIALOG = {
  open: jest.fn().mockReturnThis(),
  afterClosed: () => MOCK_MAT_DIALOG_AFTER_CLOSED,
};

export const MOCK_MAT_DIALOG_PROVIDER = {
  provide: MatDialog,
  useValue: MOCK_MAT_DIALOG
};

export const MOCK_ACTIONS = new Subject();
export const MOCK_ACTIONS_PROVIDER = {
  provide: Actions,
  useValue: MOCK_ACTIONS,
};

export const MOCK_MAT_SNACKBAR_ON_ACTION = new Subject<Issue>();
export const MOCK_MAT_SNACKBAR = {
  open: jest.fn().mockReturnThis(),
  onAction: () => MOCK_MAT_SNACKBAR_ON_ACTION,
};

export const MOCK_MAT_SNACKBAR_PROVIDER = {
  provide: MatSnackBar,
  useValue: MOCK_MAT_SNACKBAR
};

export const MOCK_DIALOG_REF = {
  close: jest.fn()
};

export const MOCK_DIALOG_REF_PROVIDER = {
  provide: MatDialogRef,
  useValue: MOCK_DIALOG_REF
};
