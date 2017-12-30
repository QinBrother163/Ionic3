import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OwnNavConfigurationPage } from './own-nav-configuration';

@NgModule({
  declarations: [
    OwnNavConfigurationPage,
  ],
  imports: [
    IonicPageModule.forChild(OwnNavConfigurationPage),
  ],
})
export class OwnNavConfigurationPageModule {}
