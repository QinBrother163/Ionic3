import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnNavMessagePage } from './own-nav-message';

@NgModule({
  declarations: [
    OwnNavMessagePage,
  ],
  imports: [
    IonicPageModule.forChild(OwnNavMessagePage),
  ],
})
export class OwnNavMessagePageModule {}
