import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from '../../../models/validator';
import { ValidationService } from '../../../services/validation/validation.service';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-borders',
  templateUrl: './borders.component.html',
  styleUrls: ['./borders.component.css']
})
export class BordersComponent implements OnInit {
  public bordersForm: FormGroup;
  public countries: any[];
  public errorCountries: boolean;

  constructor(
    public validationService: ValidationService,
    public countryService: CountryService
  ) {
    this.countries = new Array<any>();
    this.errorCountries = false;
  }

  ngOnInit() {
    this.createBordersForm();
  }

  createBordersForm() {
    const countryName = new FormControl('', [
      Validator.required('Country Name')
    ]);

    this.bordersForm = new FormGroup({
      countryName
    });
  }

  setBordersForm() {
    this.bordersForm.get('countryName').markAsDirty();

    if (this.bordersForm.valid) {
      this.getCountries(this.bordersForm.get('countryName').value);
    }
  }

  getCountries(countryName) {
    this.countryService.getBordersByCountry(countryName).subscribe(borders => {
      if (borders.length) {
        this.countryService.getCountriesByBorders(borders).subscribe(res => {
          if (res.length) {
            this.countries = res;
            this.errorCountries = false;
          } else {
            this.countries = [];
            this.errorCountries = true;
          }
        });
      }
    }, (error) => {
      this.countries = [];
      this.errorCountries = true;
    });
  }
}
