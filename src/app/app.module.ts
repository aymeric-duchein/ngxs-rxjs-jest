import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {NgxsRouterPluginModule} from '@ngxs/router-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AppState} from './app.state';

import {BoardModule} from './board/board.module';
import {ListingModule} from './listing/listing.module';
import {LoginModule} from './login/login.module';
import {SettingsModule} from './settings/settings.module';

import {UserState} from './core/user/user.state';
import {IssueState} from './core/issue/issue.state';
import {SnackbarModule} from './core/snackbar/snackbar.module';
import {ModalModule} from './core/modal/modal.module';
import {HeaderModule} from './core/header/header.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FakeJsonInterceptor} from './core/interceptor/http.interceptor';
import {IsAuthenticatedGuard} from '@src/app/core/guard/is-authenticated.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([AppState, UserState, IssueState], { developmentMode: true}),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({key: ['app']}),
    LoginModule,
    ListingModule,
    SettingsModule,
    BoardModule,
    SnackbarModule,
    ModalModule,
    HeaderModule
  ],
  bootstrap: [AppComponent],
  providers: [
    IsAuthenticatedGuard,
    {provide: HTTP_INTERCEPTORS, useClass: FakeJsonInterceptor, multi: true},
  ]
})
export class AppModule {
}
