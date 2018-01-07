import { Component,ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation ,GeolocationOptions ,Geoposition ,PositionError } from '@ionic-native/geolocation';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})

export class ContactPage {


   constructor(private geolocation: Geolocation)
   {

   }

   getGeo()
{
this.geolocation.getCurrentPosition().then((resp) => {
// resp.coords.latitude
// resp.coords.longitude
alert("Latitude: "+JSON.stringify(resp.coords.latitude)+" Longitude: "+JSON.stringify(resp.coords.longitude));
}).catch((error) => {
alert('Error getting location'+JSON.stringify(error));
});
}

}
