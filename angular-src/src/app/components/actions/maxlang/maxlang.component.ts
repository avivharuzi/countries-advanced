import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-maxlang',
  templateUrl: './maxlang.component.html',
  styleUrls: ['./maxlang.component.css']
})
export class MaxlangComponent implements OnInit {
  public countries: any;

  constructor(public countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountryWithMaxLang().subscribe(res => {
      this.countries = [res];
    });
  }

}
