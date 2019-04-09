import { Component, OnInit } from '@angular/core';
import { Countrieservice } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  country :any[];
  constructor(private _countriesService :Countrieservice) { 
    this._countriesService.getCountries().subscribe(data => this.country =data)
  }

  ngOnInit() {
  }

}
