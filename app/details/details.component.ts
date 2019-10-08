import { Component, OnInit } from '@angular/core';
import { UserService } from "../shared/user.service";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { YelpService } from "../shared/yelp.service";
import { Page } from "ui/page";
import { registerElement } from 'nativescript-angular/element-registry';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private userService: UserService, private yelpService: YelpService,
    private page: Page) {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
    this.page.actionBarHidden = true;
    registerElement('StarRating', () => require('nativescript-star-ratings').StarRating);
   }


  businessName: string;
  businessObject = {};
  errorMessage: string;
  id: string;

  ngOnInit() {
    this.yelpService.getBusinessById(this.id).subscribe(business => {
      this.businessObject = business;
      console.log("Menu item");


      console.log(this.businessObject);
    }, error => (this.errorMessage = <any>error));


  }



  toggleHeart(item) {
    item.isFavorite = !item.isFavorite;
  }

  goBack() {
    this.routerExtensions.back();
  }

  logout() {
    this.userService.logout();
    this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }

}
