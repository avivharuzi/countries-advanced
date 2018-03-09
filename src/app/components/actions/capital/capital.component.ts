import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from '../../../models/validator';
import { ValidationService } from '../../../services/validation/validation.service';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-capital',
  templateUrl: './capital.component.html',
  styleUrls: ['./capital.component.css']
})
export class CapitalComponent implements OnInit {
  public capitalForm: FormGroup;
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
    this.createCapitalForm();
  }

  createCapitalForm() {
    const capitalName = new FormControl('', [
      Validator.required('Capital Name')
    ]);

    this.capitalForm = new FormGroup({
      capitalName
    });
  }

  setCapitalForm() {
    this.capitalForm.get('capitalName').markAsDirty();

    if (this.capitalForm.valid) {
      this.getCountries(this.capitalForm.get('capitalName').value);
    }
  }

  getCountries(capitalName) {
    this.countryService.getCountriesByCapital(capitalName).subscribe(res => {
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
