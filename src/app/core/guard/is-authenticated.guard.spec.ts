import {TestBed} from '@angular/core/testing';

import {IsAuthenticatedGuard} from './is-authenticated.guard';
import {NgxsModule, Store} from '@ngxs/store';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
import {RoutesNames} from '@src/app/app-routing.const';

describe('IsAuthenticatedGuard', () => {
  let store: Store;
  let router: Router;
  let guard: IsAuthenticatedGuard;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgxsModule.forRoot(),
        RouterTestingModule
      ],
      providers: [IsAuthenticatedGuard]
    });

    store = TestBed.get(Store);
    router = TestBed.get(Router);
    guard = TestBed.get(IsAuthenticatedGuard);
  });

  test('should return an urlTree to Login if not authentiated', () => {
    jest.spyOn(store, 'selectSnapshot').mockReturnValue(false);
    expect(guard.canActivate()).toEqual(router.createUrlTree([RoutesNames.LOGIN]));
  });

  test('should return true to Login if authenticated', () => {
    jest.spyOn(store, 'selectSnapshot').mockReturnValue(true);
    expect(guard.canActivate()).toEqual(true);
  });
});
