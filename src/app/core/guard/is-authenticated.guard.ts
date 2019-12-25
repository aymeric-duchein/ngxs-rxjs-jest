import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Store} from '@ngxs/store';
import {UserState} from '../user/user.state';
import {RoutesNames} from '../../app-routing.const';

@Injectable()
export class IsAuthenticatedGuard implements CanActivate {

  constructor(private readonly store: Store, private readonly router: Router) {
  }

  canActivate(): boolean | UrlTree {
    const urlTree: UrlTree = this.router.createUrlTree([RoutesNames.LOGIN]);
    return this.store.selectSnapshot(UserState.isAuthenticated) ? true : urlTree;
  }
}
