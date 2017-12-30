import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnPage } from './own';

@NgModule({
  declarations: [
    OwnPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnPage),
  ],
})
export class OwnPageModule {}
