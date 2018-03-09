import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from '../../../models/validator';
import { ValidationService } from '../../../services/validation/validation.service';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  public codeForm: FormGroup;
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
    this.createCodeForm();
  }

  createCodeForm() {
    const code = new FormControl('', [
      Validator.required('Code'),
      Validator.isNumericFloat()
    ]);

    this.codeForm = new FormGroup({
      code
    });
  }

  setCodeForm() {
    this.codeForm.get('code').markAsDirty();

    if (this.codeForm.valid) {
      this.getCountries(this.codeForm.get('code').value);
    }
  }

  getCountries(code) {
    this.countryService.getCountriesByCode(code).subscribe(res => {
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
