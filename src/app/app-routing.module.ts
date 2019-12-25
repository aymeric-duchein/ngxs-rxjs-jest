import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BoardComponent} from './board/board.component';
import {ListingComponent} from './listing/listing.component';
import {SettingsComponent} from './settings/settings.component';
import {RoutesNames} from './app-routing.const';
import {IsAuthenticatedGuard} from './core/guard/is-authenticated.guard';

const routes: Routes = [
  {
    path: RoutesNames.LOGIN,
    component: LoginComponent
  },
  {
    path: RoutesNames.BOARD,
    component: BoardComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: RoutesNames.LISTING,
    component: ListingComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: RoutesNames.SETTINGS,
    component: SettingsComponent,
    canActivate: [IsAuthenticatedGuard]
  },
  {
    path: '',
    redirectTo: RoutesNames.BOARD,
    pathMatch: 'full'
  },
  {path: '**', redirectTo: RoutesNames.BOARD}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
