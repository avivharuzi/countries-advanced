import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../services/validation/validation.service';
import { Validator } from '../../../models/validator';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {
  public populationForm: FormGroup;
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
    this.createPopulationForm();
  }

  createPopulationForm() {
    const min = new FormControl('', [
      Validator.required('Min'),
      Validator.isNumericFloat()
    ]);

    const max = new FormControl('', [
      Validator.required('Max'),
      Validator.isNumericFloat()
    ]);

    this.populationForm = new FormGroup({
      min,
      max
    });
  }

  setPopulationForm() {
    this.populationForm.get('min').markAsDirty();
    this.populationForm.get('max').markAsDirty();

    if (this.populationForm.valid) {
      const countryParams = {
        min: this.populationForm.get('min').value,
        max: this.populationForm.get('max').value
      };

      this.getCountries(countryParams);
    }
  }

  getCountries(countryParams) {
    this.countryService.getByPopulation(countryParams).subscribe(res => {
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
