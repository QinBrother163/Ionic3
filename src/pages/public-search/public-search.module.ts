import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PublicSearchPage } from './public-search';

@NgModule({
  declarations: [
    PublicSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(PublicSearchPage),
  ],
})
export class PublicSearchPageModule {}
