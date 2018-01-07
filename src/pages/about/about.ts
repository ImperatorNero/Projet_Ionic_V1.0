import { NavController } from 'ionic-angular';

import { Component } from '@angular/core';

import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

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
