import { NavController } from 'ionic-angular';

import { Component, ViewChild } from '@angular/core';

import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('myvideo') myVideo: any;

  constructor(public navCtrl: NavController ,private mediaCapture: MediaCapture) {
  }

  startrecording() {
    let options: CaptureImageOptions = { limit: 3 };
this.mediaCapture.captureVideo(options)
  .then(
    (data: MediaFile[]) => console.log(data),
    (err: CaptureError) => console.error(err)
  );
  }
/*
  selectvideo() {
    let video = this.myVideo.nativeElement;
    var options = {
      sourceType: 2,
      mediaType: 1
    };

    Camera.getPicture(options).then((data) => {
      video.src = data;
      video.play();
    })
    */
  }
