import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-actions',
  templateUrl: './nav-actions.component.html',
  styleUrls: ['./nav-actions.component.css']
})
export class NavActionsComponent implements OnInit {
  public actions: string[];

  constructor() {
    this.actions = ['population', 'area', 'population-area', 'borders',
    'maxlang', 'capital', 'timezone', 'code', 'latlng'];
  }

  ngOnInit() {
  }

}
