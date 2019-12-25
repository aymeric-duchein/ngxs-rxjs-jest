import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatIconModule, MatMenuModule} from '@angular/material';
import {AddComponent} from './add.component';

@NgModule({
  declarations: [AddComponent],
  exports: [AddComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
  ],
})
export class AddModule {
}
