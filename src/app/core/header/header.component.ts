import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {UserState} from '../user/user.state';
import {Observable} from 'rxjs';
import {RoutesNames} from '../../app-routing.const';
import {SignOutButtonClick} from './header.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  routesNames = RoutesNames;

  @Select(UserState.isAuthenticated) isAuthenticated$: Observable<boolean>;
  @Select(UserState.getUserName) userName$: Observable<string>;

  constructor(private readonly store: Store) {
  }

  signOut() {
    this.store.dispatch(new SignOutButtonClick());
  }
}
