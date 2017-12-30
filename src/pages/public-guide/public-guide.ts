import { Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController } from 'ionic-angular';

import {HomePage} from '../home/home';
import {PublicRegisteredPage} from "../public-registered/public-registered";
import {PublicLoginPage} from "../public-login/public-login";

/**
 * Generated class for the PublicGuidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-guide',
  templateUrl: 'public-guide.html',
})
export class PublicGuidePage {

  @ViewChild(Slides) slides: Slides;
  btn_item = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad PublicGuidePage');
  // }
  ionViewDidLoad() {
    this.videoProcessing();
    for(var i=0;i<4;i++){
      let k=i+1;
      let lauout=document.getElementById("btn"+k);
      this.btn_item.push(lauout);
    }
  }

  GoRegistered() {
    let modal = this.modalCtrl.create(PublicRegisteredPage);
    modal.present();
  }

  GoLogin() {
    let modal = this.modalCtrl.create(PublicLoginPage);
    modal.present();
  }
  GoHome(){
    this.navCtrl.push(HomePage);
  }
  videoProcessing() {
    let owner = this;
    let video_bgvid = document.getElementById("bgvid");
    let oimg = document.getElementById("oimg");

    getVideoProgress();
    function getVideoProgress() {

      setTimeout(function () {
        let current_Time = (<HTMLVideoElement>document.getElementById("bgvid")).currentTime;
        if (parseInt(current_Time.toFixed(1)) == 3) {
          oimg.style.display = "none";
          video_bgvid.style.zIndex = "-100";
          owner.slideChanged();
          return false;
        }
        getVideoProgress();
      }, 50);
    }

    // video_bgvid.addEventListener('ended', function () {
    //     owner.slideChanged()
    // }, false);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    for(var i=0;i<this.btn_item.length;i++){
      if(currentIndex==i){
        this.btn_item[i].classList.add("animated");
        this.btn_item[i].classList.add("swing");
      }else {
        this.btn_item[i].classList.remove("swing");
      }
    }
  }
}
