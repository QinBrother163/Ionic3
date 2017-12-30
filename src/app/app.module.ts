import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

/* 一级导航页面 */
import {TrainingPage} from "../pages/training/training";
import {FoundPage} from "../pages/found/found";
import {DynamicPage} from "../pages/dynamic/dynamic";
import {OwnPage} from "../pages/own/own";

import {PublicGuidePage} from "../pages/public-guide/public-guide";
import {PublicRegisteredPage} from "../pages/public-registered/public-registered";
import {PublicLoginPage} from "../pages/public-login/public-login";
import {PublicSearchPage} from "../pages/public-search/public-search";

import {OneTrainPage} from "../pages/one-train/one-train";
import {OneRunPage} from "../pages/one-run/one-run";
import {OneWalkPage} from "../pages/one-walk/one-walk";
import {OneCyclingPage} from "../pages/one-cycling/one-cycling";

import {TwoSelectedPage} from "../pages/two-selected/two-selected";
import {TwoTrainPage} from "../pages/two-train/two-train";
import {TwoDietPage} from "../pages/two-diet/two-diet";
import {TwoShopPage} from "../pages/two-shop/two-shop";

import {ThreeHotPage} from "../pages/three-hot/three-hot";
import {ThreeFollowPage} from "../pages/three-follow/three-follow";
import {ThreeOptionsPage} from "../pages/three-options/three-options";

import { OwnNavMessagePage } from '../pages/own-nav-message/own-nav-message';
import { OwnNavConfigurationPage } from '../pages/own-nav-configuration/own-nav-configuration';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrainingPage,
    FoundPage,
    DynamicPage,
    OwnPage,
    PublicSearchPage,
    PublicGuidePage,
    PublicRegisteredPage,
    PublicLoginPage,
    OneTrainPage,
    OneRunPage,
    OneWalkPage,
    OneCyclingPage,
    TwoSelectedPage,
    TwoTrainPage,
    TwoDietPage,
    TwoShopPage,
    ThreeHotPage,
    ThreeFollowPage,
    ThreeOptionsPage,
    OwnNavMessagePage,
    OwnNavConfigurationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrainingPage,
    FoundPage,
    DynamicPage,
    OwnPage,
    PublicSearchPage,
    PublicGuidePage,
    PublicRegisteredPage,
    PublicLoginPage,
    OneTrainPage,
    OneRunPage,
    OneWalkPage,
    OneCyclingPage,
    TwoSelectedPage,
    TwoTrainPage,
    TwoDietPage,
    TwoShopPage,
    ThreeHotPage,
    ThreeFollowPage,
    ThreeOptionsPage,
    OwnNavMessagePage,
    OwnNavConfigurationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
