import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../services/validation/validation.service';
import { Validator } from '../../../models/validator';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  public timezoneForm: FormGroup;
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
    this.createTimezoeForm();
  }

  createTimezoeForm() {
    const utcMin = new FormControl('', [
      Validator.required('Utc min'),
      Validator.isNumericFloat()
    ]);

    const utcMax = new FormControl('', [
      Validator.required('Utc max'),
      Validator.isNumericFloat()
    ]);

    this.timezoneForm = new FormGroup({
      utcMin,
      utcMax
    });
  }

  setTimezoneForm() {
    this.timezoneForm.get('utcMin').markAsDirty();
    this.timezoneForm.get('utcMax').markAsDirty();

    if (this.timezoneForm.valid) {
      const countryParams = {
        utcMin: this.timezoneForm.get('utcMin').value,
        utcMax: this.timezoneForm.get('utcMax').value
      };

      this.getCountries(countryParams);
    }
  }

  getCountries(countryParams) {
    this.countryService.getCountriesByTimezone(countryParams).subscribe(res => {
      if (res.length) {
        this.countries = res;
        this.errorCountries = false;
      }
    }, (error) => {
      this.countries = [];
      this.errorCountries = true;
    });
  }
}
