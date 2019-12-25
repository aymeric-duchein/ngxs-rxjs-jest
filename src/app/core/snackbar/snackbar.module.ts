import {NgModule} from '@angular/core';
import {SnackbarComponent} from './snackbar.component';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  declarations: [SnackbarComponent],
  exports: [SnackbarComponent],
  imports: [MatSnackBarModule],
})
export class SnackbarModule {
}
