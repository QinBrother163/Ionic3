import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import { OwnNavMessagePage } from '../own-nav-message/own-nav-message';
import { OwnNavConfigurationPage } from '../own-nav-configuration/own-nav-configuration';
/**
 * Generated class for the OwnPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-own',
    templateUrl: 'own.html',
})
export class OwnPage {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad OwnPage');
    }

    Go_scan() {
        alert("暂未开通!");
    }

    Go_ownMessage() {
        this.navCtrl.push(OwnNavMessagePage);
    }

    Go_ownConfiguration() {
        this.navCtrl.push(OwnNavConfigurationPage);
    }
}
