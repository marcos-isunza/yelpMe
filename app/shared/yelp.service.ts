import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { map } from 'rxjs/operators';
import { Business } from './../shared/business-interface';

@Injectable()
export class YelpService {

    private _businessUrlPhone = 'https://api.yelp.com/v3/businesses/search/phone';
    private apiKey = 'Bearer ' +
        'tcYrZMyNTdiX8a-5nq_-AOjuFXLqCho_lKJsYYfNXcvW0qm6R818hmVrOLFjzTFVbTOQ6dTSNTVv_X3aayZY0E3QRt0D3gX54X1a9BC6PRqCsRT3EDyMpj6DNiVuWnYx';
    private apiKey2 = 'Bearer ' +
        'PmE9JqxgeY4KHerH0cr2M-Alyz2OH9rQ426kjiM7z84Yd07Rp1c0-RlLmptVWOSR4Ekl3mN1WxrXq1bOEQAY80JCOaWnCnF6K7ytvS4wklNtKaxq_5M9m7Ntf0NyWnYx';
    private _businessUrl = 'https://api.yelp.com/v3/businesses/search';
    private _businessUrlId = 'https://api.yelp.com/v3/businesses/';
    private _jsonRecipe = './assets/recipes';
    appSettings = require("application-settings");

    constructor(private _http: HttpClient) { }

    // getBusinessByLocation(geolocationPosition, category): Observable < Business[] > {
    getBusinessByLocation(category): Observable<Business[]> {
        let headers = new HttpHeaders().set('Authorization', this.apiKey);
        let searchParams = new HttpParams({
            fromObject: {
                latitude: this.appSettings.getNumber("latitude"),
                longitude: this.appSettings.getNumber('longitude'),
                categories: category,
                limit: '5'
            }
        });
        return this._http
            .get<Business[]>(this._businessUrl + '?',
            {
                params: searchParams,
                headers: headers
            })
            .pipe(map(data => {
                //console.log(data);
                return data;
            }));
    }

    getBusinessById(id) {
        let headers = new HttpHeaders().set('Authorization', this.apiKey2);
        return this._http
            .get(this._businessUrlId + id, {
                headers: headers
            })
            .pipe(map(data => {
                console.log(data);
                return data;
            }));
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err);
        console.log(err.message);
        return Observable.throw(err.message);
    }

}