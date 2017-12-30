import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicRegisteredPage } from './public-registered';

@NgModule({
  declarations: [
    PublicRegisteredPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicRegisteredPage),
  ],
})
export class PublicRegisteredPageModule {}
