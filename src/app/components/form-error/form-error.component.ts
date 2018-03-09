import { Component, OnInit, Input , AfterContentChecked } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrls: ['./form-error.component.css']
})
export class FormErrorComponent implements OnInit, AfterContentChecked {
  @Input()
  public control: FormControl;

  public errors: string[];

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {
    this.errors = new Array<string>();

    for (const key in this.control.errors) {
      if (this.control.dirty && this.control.invalid) {
        this.errors.push(this.control.errors[key]);
      }
    }
  }
}
