import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the PublicRegisteredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-public-registered',
    templateUrl: 'public-registered.html',
})
export class PublicRegisteredPage {


    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    }

    //
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad PublicRegisteredPage');
    // }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}
