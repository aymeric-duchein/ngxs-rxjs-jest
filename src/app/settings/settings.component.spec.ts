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

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should dispatch an action on avatar url edit', () => {
    const urlInput = fixture.debugElement.query(By.css(`input`));
    urlInput.nativeElement.value = 'new_url';
    urlInput.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new UserSettingsUpdate({notifications: true, avatarUrl: 'new_url'}));
  });

  test('should dispatch an action on notifications edit', () => {
    const notificationsCheckbox: MockedComponent<MatCheckbox> = fixture.debugElement.query(By.css('mat-checkbox ')).componentInstance;
    notificationsCheckbox.__simulateChange(false);

    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledWith(new UserSettingsUpdate({notifications: false, avatarUrl: 'fake_avatar_url'}));
  });

  test('should display avatar preview', () => {
    const urlInput = fixture.debugElement.query(By.css(`input`));
    urlInput.nativeElement.value = 'new_url';
    urlInput.nativeElement.dispatchEvent(new Event('input'));

    fixture.detectChanges();
    const imgPreview = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(imgPreview.src).toContain('new_url');
  });

  test('should display notifications status as activated', () => {
    const checkbox = fixture.debugElement.query(By.css('mat-checkbox'));
    expect(checkbox.nativeElement.innerHTML).toContain('Activated');
  });

  test('should display notifications status as deactivated', () => {
    const notificationsCheckbox: MockedComponent<MatCheckbox> = fixture.debugElement.query(By.css('mat-checkbox ')).componentInstance;
    notificationsCheckbox.__simulateChange(false);

    fixture.detectChanges();
    const checkbox = fixture.debugElement.query(By.css('mat-checkbox'));
    expect(checkbox.nativeElement.innerHTML).toContain('Deactivated');
  });
});
