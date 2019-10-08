import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppRoutingModule } from './app-routing.module';
import { registerElement } from "nativescript-angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from 'nativescript-angular/forms';

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client';

// TODO: should be imported from kinvey-nativescript-sdk/angular but declaration file is currently missing
import { KinveyModule, UserService as KinveyUserService } from "kinvey-nativescript-sdk/lib/angular";
import { UserService } from "./shared/user.service";
import { PokemonService } from "./shared/pokemon.service";
import { FoodTypeComponent } from './food-type/food-type.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { YelpService } from './shared/yelp.service';
import { DetailsComponent } from './details/details.component';
import { DataService } from "./resources/testData"

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpClientModule,
    AppRoutingModule,
    NativeScriptHttpClientModule,

    KinveyModule.init({
      appKey: "kid_SyY8LYO8M",
      appSecret: "09282985d7c540f7b076a9c7fd884c77"
    })
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FoodTypeComponent,
    CategoriesComponent,
    MenuComponent,
    DetailsComponent
  ],
  providers: [
    UserService,
    PokemonService,
    YelpService,
    DataService
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
