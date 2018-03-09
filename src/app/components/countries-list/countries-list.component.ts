import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country/country.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {
  public searchValue: string;
  public optionValue: string;
  public countries: any[];

  constructor(public countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe((res) => {
      if (res.length) {
        this.countries = res;
      }
    });
  }

  selectCountry() {
    this.searchValue = this.optionValue;
  }
}
