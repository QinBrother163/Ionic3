import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the FoundPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-found',
    templateUrl: 'found.html',
})
export class FoundPage {

    segmentsArray = ['segmentOne2', 'segmentTwo2', 'segmentThree2', 'segmentFour2'];
    segmentModel2: string = this.segmentsArray[0];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    // ionViewDidLoad() {
    //     console.log('ionViewDidLoad FoundPage');
    // }

    swipeEv(event) {
        //向左滑
        if (event.direction == 2) {
            if (this.segmentsArray.indexOf(this.segmentModel2) < 3) {
                this.segmentModel2 = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel2) + 1];
            }
        }
        //向右滑
        if (event.direction == 4) {
            if (this.segmentsArray.indexOf(this.segmentModel2) > 0) {
                this.segmentModel2 = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel2) - 1];
            }
        }
    }

}
