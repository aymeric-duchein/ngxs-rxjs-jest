import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SettingsComponent} from './settings.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckbox, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {MockedComponent, MockModule} from 'ng-mocks';
import {NgxsModule, Store} from '@ngxs/store';
import {UserState} from '@src/app/core/user/user.state';
import {By} from '@angular/platform-browser';
import {UserSettingsUpdate} from '@src/app/settings/settings.actions';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsComponent],
      imports: [
        NgxsModule.forRoot(),
        ReactiveFormsModule,
        MockModule(MatFormFieldModule),
        MockModule(MatInputModule),
        MockModule(MatCheckboxModule),
        MockModule(MatIconModule),
      ]
    });

    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
    jest.spyOn(TestBed.get(Store), 'selectSnapshot').mockImplementation((selector) => {
      if (selector === UserState.getNotifications) {
        return true;
      }
      if (selector === UserState.getAvatarUrl) {
        return 'fake_avatar_url';
      }
    });
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test.todo('should create');

  test.todo('should dispatch an action on avatar url edit');

  test.todo('should dispatch an action on notifications edit');

  test.todo('should display avatar preview');

  test.todo('should display notifications status as activated');

  test.todo('should display notifications status as deactivated');
});
