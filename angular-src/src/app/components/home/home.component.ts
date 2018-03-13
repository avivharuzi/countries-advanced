import { Component, OnInit } from '@angular/core';
import { BASE_IMAGES_PATH } from '../../constants/urls';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public bg: string;

  constructor() {
    this.bg = null;
  }

  ngOnInit() {
    this.bg = `${BASE_IMAGES_PATH}/main/bg.jpg`;
  }

}
