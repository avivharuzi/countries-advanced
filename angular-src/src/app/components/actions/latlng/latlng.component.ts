import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../../services/validation/validation.service';
import { Validator } from '../../../models/validator';
import { CountryService } from '../../../services/country/country.service';

@Component({
  selector: 'app-latlng',
  templateUrl: './latlng.component.html',
  styleUrls: ['./latlng.component.css']
})
export class LatlngComponent implements OnInit {
  public latlngForm: FormGroup;
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
    this.createLatlngForm();
  }

  createLatlngForm() {
    const topLeftX = new FormControl('', [
      Validator.required('Top left x'),
      Validator.isNumericFloat()
    ]);

    const topLeftY = new FormControl('', [
      Validator.required('Top left y'),
      Validator.isNumericFloat()
    ]);

    const bottomRightX = new FormControl('', [
      Validator.required('Bottom right x'),
      Validator.isNumericFloat()
    ]);

    const bottomRightY = new FormControl('', [
      Validator.required('Bottom right y'),
      Validator.isNumericFloat()
    ]);

    this.latlngForm = new FormGroup({
      topLeftX,
      topLeftY,
      bottomRightX,
      bottomRightY
    });
  }

  setLatlngForm() {
    this.latlngForm.get('topLeftX').markAsDirty();
    this.latlngForm.get('topLeftY').markAsDirty();
    this.latlngForm.get('bottomRightX').markAsDirty();
    this.latlngForm.get('bottomRightY').markAsDirty();

    if (this.latlngForm.valid) {
      const countryParams = {
        topLeftX: this.latlngForm.get('topLeftX').value,
        topLeftY: this.latlngForm.get('topLeftY').value,
        bottomRightX: this.latlngForm.get('bottomRightX').value,
        bottomRightY: this.latlngForm.get('bottomRightY').value,
      };

      this.getCountries(countryParams);
    }
  }

  getCountries(countryParams) {
    console.log(countryParams);
    this.countryService.getCountriesByLatLng(countryParams).subscribe(res => {
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
