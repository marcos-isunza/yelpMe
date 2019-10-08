import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";


@Component({
  selector: 'app-food-type',
  moduleId: module.id,
  templateUrl: './food-type.component.html',
  styleUrls: ['./food-type.component.css']
})
export class FoodTypeComponent implements OnInit {


  constructor(private routerExtensions: RouterExtensions) { }

appSettings = require("application-settings");

  lat = 0;
  lon = 0;
  speed = 0;
  addr = "";

  getLocation(args): void {
    geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
      .then(res => {
        this.lat = res.latitude;
        this.appSettings.setNumber("latitude", res.latitude);  // Writing
        this.lon = res.longitude;
        this.appSettings.setNumber("longitude", res.longitude);  // Writing
        this.speed = res.speed;
        // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
        fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyAwMoZ1qEVHlC79cosMAtYNFSetq4zAeY0")
          .then((response) => response.json()).then((r) => {
            console.log(r);
            if (r.results[0]) {
              this.addr = r.results[0].formatted_address;
            }
          });
      });
  }

  ngOnInit() {
  }


  goBack(){
    this.routerExtensions.navigate(["/home"], { clearHistory: false });
  }

}
