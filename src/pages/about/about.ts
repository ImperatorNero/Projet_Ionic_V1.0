import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';

import { VideoCapturePlus, VideoCapturePlusOptions, MediaFile } from '@ionic-native/video-capture-plus';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {
  }

  startrecording() {
    MediaCapture.captureVideo((videodata) => {
      alert(JSON.stringify(videodata));
     })
  }
}
