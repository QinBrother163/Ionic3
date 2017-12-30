import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the DynamicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-dynamic',
    templateUrl: 'dynamic.html',
})
export class DynamicPage {

    segmentsArray = ['segmentOne3', 'segmentTwo3', 'segmentThree3'];
    segmentModel3: string = this.segmentsArray[0];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad DynamicPage');
    // }
    swipeEv(event) {
        //向左滑
        if (event.direction == 2) {
            if (this.segmentsArray.indexOf(this.segmentModel3) < 2) {
                this.segmentModel3 = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel3) + 1];
            }
        }
        //向右滑
        if (event.direction == 4) {
            if (this.segmentsArray.indexOf(this.segmentModel3) > 0) {
                this.segmentModel3 = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel3) - 1];
            }
        }
    }

}
