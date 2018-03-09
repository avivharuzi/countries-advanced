import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../services/validation/validation.service';
import { Validator } from '../../../models/validator';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public areaForm: FormGroup;
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
    this.createAreaForm();
  }

  createAreaForm() {
    const min = new FormControl('', [
      Validator.required('Min'),
      Validator.isNumericFloat()
    ]);

    const max = new FormControl('', [
      Validator.required('Max'),
      Validator.isNumericFloat()
    ]);

    this.areaForm = new FormGroup({
      min,
      max
    });
  }

  setAreaForm() {
    this.areaForm.get('min').markAsDirty();
    this.areaForm.get('max').markAsDirty();

    if (this.areaForm.valid) {
      const countryParams = {
        min: this.areaForm.get('min').value,
        max: this.areaForm.get('max').value
      };

      this.getCountries(countryParams);
    }
  }

  getCountries(countryParams) {
    this.countryService.getByArea(countryParams).subscribe(res => {
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
