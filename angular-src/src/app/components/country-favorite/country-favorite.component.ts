import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoriteService } from '../../services/favorite/favorite.service';

@Component({
  selector: 'app-country-favorite',
  templateUrl: './country-favorite.component.html',
  styleUrls: ['./country-favorite.component.css']
})
export class CountryFavoriteComponent implements OnInit {
  @Input()
  public countryFavorite: any;
  @Input()
  public isCanDeleted: boolean;
  @Output()
  public removeFavoriteCountry: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    public favoriteService: FavoriteService
  ) { }

  ngOnInit() {
  }

  setCountryToFavorite() {
    this.favoriteService.setCountry({ country: this.countryFavorite.name }).subscribe();
  }

  deleteCountryFromFavorite() {
    this.favoriteService.deleteCountry(this.countryFavorite.name).subscribe(res => {
      this.removeFavoriteCountry.emit(this.countryFavorite);
    });
  }
}
