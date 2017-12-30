import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwoDietPage } from './two-diet';

@NgModule({
  declarations: [
    TwoDietPage,
  ],
  imports: [
    IonicPageModule.forChild(TwoDietPage),
  ],
})
export class TwoDietPageModule {}
