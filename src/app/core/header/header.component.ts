import {Component} from '@angular/core';
import {RoutesNames} from '../../app-routing.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  routesNames = RoutesNames;

  constructor() {}

  signOut() {
  }
}
