import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../services/validation/validation.service';
import { Validator } from '../../../models/validator';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-population-area',
  templateUrl: './population-area.component.html',
  styleUrls: ['./population-area.component.css']
})
export class PopulationAreaComponent implements OnInit {
  public populationAreaForm: FormGroup;
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
    this.createPopulationAreaForm();
  }

  createPopulationAreaForm() {
    const minPop = new FormControl('', [
      Validator.required('Min population'),
      Validator.isNumericFloat()
    ]);

    const maxPop = new FormControl('', [
      Validator.required('Max population'),
      Validator.isNumericFloat()
    ]);

    const minArea = new FormControl('', [
      Validator.required('Min area'),
      Validator.isNumericFloat()
    ]);

    const maxArea = new FormControl('', [
      Validator.required('Max area'),
      Validator.isNumericFloat()
    ]);

    this.populationAreaForm = new FormGroup({
      minPop,
      maxPop,
      minArea,
      maxArea
    });
  }

  setPopulationAreaForm() {
    this.populationAreaForm.get('minPop').markAsDirty();
    this.populationAreaForm.get('maxPop').markAsDirty();
    this.populationAreaForm.get('minArea').markAsDirty();
    this.populationAreaForm.get('maxArea').markAsDirty();

    if (this.populationAreaForm.valid) {
      const countryParams = {
        minPop: this.populationAreaForm.get('minPop').value,
        maxPop: this.populationAreaForm.get('maxPop').value,
        minArea: this.populationAreaForm.get('minArea').value,
        maxArea: this.populationAreaForm.get('maxArea').value,
      };

      this.getCountries(countryParams);
    }
  }

  getCountries(countryParams) {
    this.countryService.getByPopulationAndArea(countryParams).subscribe(res => {
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
