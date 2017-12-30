import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicGuidePage } from './public-guide';

@NgModule({
  declarations: [
    PublicGuidePage,
  ],
  imports: [
    IonicPageModule.forChild(PublicGuidePage),
  ],
})
export class PublicGuidePageModule {}
