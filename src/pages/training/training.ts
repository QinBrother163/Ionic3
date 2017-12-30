import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {PublicSearchPage} from "../public-search/public-search";

@IonicPage()
@Component({
    selector: 'page-training',
    templateUrl: 'training.html',
})
export class TrainingPage {

    segmentsArray = ['segmentOne', 'segmentTwo', 'segmentThree', 'segmentFour'];
    segmentModel1: string = this.segmentsArray[0];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TrainingPage');
    }

    goSearch(){
        this.navCtrl.push(PublicSearchPage);
    }

    swipeEv(event) {
        //向左滑
        if (event.direction == 2) {
            if (this.segmentsArray.indexOf(this.segmentModel1) < 3) {
                this.segmentModel1 = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel1) + 1];
            }
        }
        //向右滑
        if (event.direction == 4) {
            if (this.segmentsArray.indexOf(this.segmentModel1) > 0) {
                this.segmentModel1 = this.segmentsArray[this.segmentsArray.indexOf(this.segmentModel1) - 1];
            }
        }
    }
}
