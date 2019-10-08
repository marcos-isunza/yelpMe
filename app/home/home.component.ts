import { Component } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { UserService } from "../shared/user.service";
import { PokemonService } from "../shared/pokemon.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //title = 'Dashboard';
  private counter = 42;
  processing = false;
  pokemon = { id: null, name: null, image: null };

  constructor(private userService: UserService, private routerExtensions: RouterExtensions, private pokemonService: PokemonService) { }

  public getMessage() {
    return this.counter > 0 ?
      `${this.counter} taps left` :
      'Hoorraaay! You unlocked the NativeScript clicker achievement!';
  }

  public onTap() {
    this.counter--;
  }

  logout() {
    this.userService.logout();
    this.routerExtensions.navigate(["/login"], { clearHistory: true });
  }

  submit() {
    if (!this.pokemon.id) {
      return;
    }
    this.processing = true;
    this.search();
    if (this.pokemon.name != null) {
      this.processing = false;
    }
  }

  search() {
    this.pokemonService.getPokemonInfo(this.pokemon.id)
      .subscribe(data => {
        this.pokemon.name = data["name"];
        this.pokemon.image = data["sprites"].front_default;
      },
        error => console.log(error))
    this.processing = false;
  }

  goMenu(){
    this.routerExtensions.navigate(["/category"], { clearHistory: false });
  }
}
