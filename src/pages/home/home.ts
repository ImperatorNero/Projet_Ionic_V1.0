import { Component } from '@angular/core';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {NavController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public photos : any;
  public base64Image : string;
  constructor(public navCtrl : NavController, private camera : Camera, private alertCtrl : AlertController) {

}

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
        title: 'Vous ête sur de vouloir supprimer la photo ?',
        message: '',
        buttons: [
          {
            text: 'Non',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'Oui',
            handler: () => {
              console.log('Agree clicked');
              this.photos.splice(index, 1);
            }
          }
        ]
      });
    confirm.present();
  }

  takePhoto() {
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }

}
