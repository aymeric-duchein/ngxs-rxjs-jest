import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MockComponent} from 'ng-mocks';
import {HeaderComponent} from './core/header/header.component';
import {ModalComponent} from './core/modal/modal.component';
import {SnackbarComponent} from './core/snackbar/snackbar.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        MockComponent(HeaderComponent),
        MockComponent(ModalComponent),
        MockComponent(SnackbarComponent),
      ],
    });


  });

  test('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
