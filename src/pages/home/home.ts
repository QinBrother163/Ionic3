import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* 一级导航页面 */
import {TrainingPage} from "../training/training";
import {FoundPage} from "../found/found";
import {DynamicPage} from "../dynamic/dynamic";
import {OwnPage} from "../own/own";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1Root: any = TrainingPage;
  tab2Root: any = FoundPage;
  tab3Root: any = DynamicPage;
  tab4Root: any = OwnPage;

  constructor(public navCtrl: NavController) {

  }

}
