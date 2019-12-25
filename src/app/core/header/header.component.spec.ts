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

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should not display menu when no authenticated', () => {
    const menu = fixture.debugElement.query(By.css('.header-buttons'));
    expect(menu).toBeNull();
  });

  describe('when authenticated', () => {
    beforeEach(() => {
      isAuthenticated$.next(true);
      fixture.detectChanges();
    });

    test('should display menu no authenticated', () => {
      const menu = fixture.debugElement.query(By.css('.header-buttons'));
      expect(menu).not.toBeNull();
    });

    test('should link to Board', () => {
      const link = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(1)>a:nth-of-type(1)'));
      const routerLink = MockHelper.getDirective(link, RouterLinkWithHref);
      expect(routerLink).not.toBeNull();
      expect((routerLink as any).commands).toEqual([RoutesNames.BOARD]);
    });

    test('should link to Listing', () => {
      const link = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(1)>a:nth-of-type(2)'));
      const routerLink = MockHelper.getDirective(link, RouterLinkWithHref);
      expect(routerLink).not.toBeNull();
      expect((routerLink as any).commands).toEqual([RoutesNames.LISTING]);
    });

    test('should open menu', () => {
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>button'));
      const menuTrigger = MockHelper.getDirective(button, MatMenuTrigger);
      expect(menuTrigger).not.toBeNull();
    });

    test('should link to Settings', () => {
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>mat-menu>button:nth-of-type(1)'));
      const routerLink = MockHelper.getDirective(button, RouterLink);
      expect(routerLink).not.toBeNull();
      expect((routerLink as any).commands).toEqual([RoutesNames.SETTINGS]);
    });

    test('should Signout', () => {
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>mat-menu>button:nth-of-type(2)'));
      button.triggerEventHandler('click', {});
      expect(store.dispatch).toHaveBeenCalledWith(new SignOutButtonClick());
      expect(store.dispatch).toHaveBeenCalledWith(expect.any(SignOutButtonClick));
    });

    test('should display username', () => {
      userName$.next('Mock Name');
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>button'));
      expect(button.nativeElement.innerHTML).toContain('Mock Name');
    });
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

    // isAuthenticated$ = mockSelect(UserState.isAuthenticated as any);
    // userName$ = mockSelect(UserState.getUserName as any);
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

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should not display menu when no authenticated', () => {
    const menu = fixture.debugElement.query(By.css('.header-buttons'));
    expect(menu).toBeNull();
  });

  describe('when authenticated', () => {
    beforeEach(() => {
      isAuthenticated$.next(true);
      fixture.detectChanges();
    });

    test('should display menu no authenticated', () => {
      const menu = fixture.debugElement.query(By.css('.header-buttons'));
      expect(menu).not.toBeNull();
    });

    test('should link to Board', () => {
      const link = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(1)>a:nth-of-type(1)'));
      const routerLink = MockHelper.getDirective(link, RouterLinkWithHref);
      expect(routerLink).not.toBeNull();
      expect((routerLink as any).commands).toEqual([RoutesNames.BOARD]);
    });

    test('should link to Listing', () => {
      const link = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(1)>a:nth-of-type(2)'));
      const routerLink = MockHelper.getDirective(link, RouterLinkWithHref);
      expect(routerLink).not.toBeNull();
      expect((routerLink as any).commands).toEqual([RoutesNames.LISTING]);
    });

    test('should open menu', () => {
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>button'));
      const menuTrigger = MockHelper.getDirective(button, MatMenuTrigger);
      expect(menuTrigger).not.toBeNull();
    });

    test('should link to Settings', () => {
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>mat-menu>button:nth-of-type(1)'));
      const routerLink = MockHelper.getDirective(button, RouterLink);
      expect(routerLink).not.toBeNull();
      expect((routerLink as any).commands).toEqual([RoutesNames.SETTINGS]);
    });

    test('should Signout', () => {
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>mat-menu>button:nth-of-type(2)'));
      button.triggerEventHandler('click', {});
      expect(store.dispatch).toHaveBeenCalledWith(new SignOutButtonClick());
      expect(store.dispatch).toHaveBeenCalledWith(expect.any(SignOutButtonClick));
    });

    test('should display username', () => {
      userName$.next('Mock Name');
      fixture.detectChanges();
      const button = fixture.debugElement.query(By.css('.header-buttons>div:nth-of-type(2)>button'));
      expect(button.nativeElement.innerHTML).toContain('Mock Name');
    });
  });

});
