import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import {PublicRegisteredPage} from "../public-registered/public-registered";
/**
 * Generated class for the PublicLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-login',
  templateUrl: 'public-login.html',
})
export class PublicLoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PublicLoginPage');
  // }

  GoRegistered() {
    // this.navCtrl.push(HomePage);
    let modal = this.modalCtrl.create(PublicRegisteredPage);
    modal.present();
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
