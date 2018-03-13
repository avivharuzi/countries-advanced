import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-no-result',
  templateUrl: './no-result.component.html',
  styleUrls: ['./no-result.component.css']
})
export class NoResultComponent implements OnInit {
  @Input()
  public isNoResult: boolean;

  constructor() { }

  ngOnInit() {
  }

}
