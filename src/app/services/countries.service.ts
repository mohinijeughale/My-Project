import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable()
export class Countrieservice{
    // private _Url1 :string ="http://restcountries.eu/rest/v2/all";
    private _Url:string="assets/data/countries.json"

    constructor(private _httpObject :HttpClient){

    }
    getCountries ():Observable <any[]> {
        return this._httpObject.get<any[]>(this._Url);
    }

}