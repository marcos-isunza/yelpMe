import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { YelpService } from "../shared/yelp.service";
import { Business } from '../shared/business-interface';
import { UserService } from "../shared/user.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public category: string;
  private _businessService;

  public constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, private userService: UserService, private yelpService: YelpService) {
    this.route.params.subscribe((params) => {
      this.category = params["category"];
    });
    console.log(this.category);
  }

  business: Business[] = [];
  errorMessage: string;

  ngOnInit() {
    this.getCategoryBusiness();
  }

  goBack() {
    this.routerExtensions.navigate(["/category"], { clearHistory: false });
  }

  logout() {
    this.userService.logout();
    this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }

  getCategoryBusiness(){
    this.yelpService.getBusinessByLocation(this.category)
    .subscribe(business => {
      this.business = business;
      // console.log(this.business);
    }, error => console.log(<any>error));
  }
  goDetails(id){
    console.log(id);
    this.routerExtensions.navigate(["/details", id], { clearHistory: false });
  }

}
