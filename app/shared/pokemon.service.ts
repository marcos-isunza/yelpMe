// The following is a sample implementation of a backend service using Progress Kinvey (https://www.progress.com/kinvey).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
// TODO: should be imported from kinvey-nativescript-sdk/angular but declaration file is currently missing
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class PokemonService {
    private url_jerry = 'http://pokeapi.salestock.net/api/v2/';
    private poke_id = 'https://pokeapi.co/api/v2/';


    constructor(private http: HttpClient) { }

    getPokemonInfo(pokemonId) {
        return this.http.get(this.poke_id + 'pokemon/' + pokemonId)
            .pipe(map(data => {
                console.log(data);
                return data;
            }));
    }





}
