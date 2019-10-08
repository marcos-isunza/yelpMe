import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import * as geolocation from "nativescript-geolocation";
import { UserService } from "../shared/user.service";
import { Accuracy } from "ui/enums"

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private routerExtensions: RouterExtensions, private userService: UserService) { }

//suitable for tasks like saving and retriving small portions of custom values from the device’s local storage
appSettings = require("application-settings");

  lat = 0;
  lon = 0;
  speed = 0;
  addr = "";

  getLocation(): void {
    geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
      .then(res => {
        this.lat = res.latitude;
        this.appSettings.setNumber("latitude", res.latitude);  // Writing
        this.lon = res.longitude;
        this.appSettings.setNumber("longitude", res.longitude);  // Writing
        this.speed = res.speed;
        console.log("lat: " + res.latitude + "lon: " + res.longitude);
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
    this.getLocation();
  }

  goMenu(category){
    this.routerExtensions.navigate(["/menu", category], { clearHistory: false });
  }

  goBack(){
    this.routerExtensions.navigate(["/home"], { clearHistory: false });
  }

  logout() {
    this.userService.logout();
    this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }

}
