import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule, Store} from '@ngxs/store';
import {MatButtonModule, MatIconModule, MatMenuModule, MatMenuTrigger, MatToolbarModule} from '@angular/material';
import {MockHelper, MockModule} from 'ng-mocks';
import {mockSelect} from '@ngxs-labs/testing/jest';
import {UserState} from '@src/app/core/user/user.state';
import {Subject} from 'rxjs';
import {By} from '@angular/platform-browser';
import {RouterLink, RouterLinkWithHref} from '@angular/router';
import {RoutesNames} from '@src/app/app-routing.const';
import {SignOutButtonClick} from '@src/app/core/header/header.action';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let isAuthenticated$: Subject<boolean>;
  let userName$: Subject<string>;
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, NgxsModule.forRoot(),
        MockModule(MatToolbarModule),
        MockModule(MatButtonModule),
        MockModule(MatIconModule),
        MockModule(MatMenuModule),
      ]
    });

    isAuthenticated$ = mockSelect(UserState.isAuthenticated as any);
    userName$ = mockSelect(UserState.getUserName as any);
    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test.todo('should create');

  test.todo('should not display menu when no authenticated');

  describe('when authenticated', () => {
    beforeEach(() => {
      isAuthenticated$.next(true);
      fixture.detectChanges();
    });

    test.todo('should display menu no authenticated');

    test.todo('should link to Board');

    test.todo('should link to Listing');

    test.todo('should open menu');

    test.todo('should link to Settings');

    test.todo('should Signout');

    test.todo('should display username');
  });

});

describe('HeaderComponent without ngxs-labs', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  const isAuthenticated$: Subject<boolean> = new Subject<boolean>();
  const userName$: Subject<string> = new Subject<string>();
  let store: Store;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [RouterTestingModule, NgxsModule.forRoot(),
        MockModule(MatToolbarModule),
        MockModule(MatButtonModule),
        MockModule(MatIconModule),
        MockModule(MatMenuModule),
      ]
    });

    store = TestBed.get(Store);
    jest.spyOn(store, 'dispatch');
    jest.spyOn(store, 'select').mockImplementation(selectorFn => {
      switch (selectorFn) {
        case UserState.isAuthenticated as any:
          return isAuthenticated$;
        case UserState.getUserName as any:
          return userName$;
      }
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test.todo('should create');

  test.todo('should not display menu when no authenticated');

  describe('when authenticated', () => {
    beforeEach(() => {
      isAuthenticated$.next(true);
      fixture.detectChanges();
    });

    test.todo('should display menu no authenticated');

    test.todo('should link to Board');

    test.todo('should link to Listing');

    test.todo('should open menu');

    test.todo('should link to Settings');

    test.todo('should Signout');

    test.todo('should display username');
  });

});
