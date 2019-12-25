import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MockModule} from 'ng-mocks';
import {NgxsModule, Store} from '@ngxs/store';
import {Subject} from 'rxjs';
import {UserState} from '@src/app/core/user/user.state';
import {By} from '@angular/platform-browser';
import {mockSelect} from '@ngxs-labs/testing/jest';
import {SignInButtonClick} from '@src/app/login/login.action';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let store: Store;
  let getError$: Subject<string>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        NgxsModule.forRoot(),
        MockModule(MatCardModule),
        MockModule(MatButtonModule),
        MockModule(MatFormFieldModule),
        MockModule(MatInputModule),
        FormsModule,
        ReactiveFormsModule,
      ]
    });

    getError$ = mockSelect(UserState.getError);
    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should display error', () => {
    getError$.next('Invalid user');
    fixture.detectChanges();

    const errorP = fixture.debugElement.query(By.css('p'));
    expect(errorP.nativeElement.innerHTML).toContain('Invalid user');
  });

  test('should dispatch login action', () => {
    const loginInput = fixture.debugElement.query(By.css(`form>div:nth-of-type(1)>mat-form-field>input`));
    loginInput.nativeElement.value = 'login';
    loginInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const passInput = fixture.debugElement.query(By.css(`form>div:nth-of-type(2)>mat-form-field>input`));
    passInput.nativeElement.value = 'pass';
    passInput.nativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('button'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new SignInButtonClick('login', 'pass'));
  });
});
