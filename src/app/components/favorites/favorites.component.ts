import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../../services/favorite/favorite.service';
import { CountryService } from '../../services/country/country.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  public favorites: any[];

  constructor(
    public favoriteService: FavoriteService,
    public countryService: CountryService
  ) {}

  ngOnInit() {
    this.favorites = null;
    this.getCountries();
  }

  getCountries(): void {
    if (document.cookie !== '') {
      this.favoriteService.getCountries().subscribe(res => {
        if (res.length) {
          this.countryService.getCountriesByCountryNames(res).subscribe(response => {
            this.favorites = response;
          });
        }
      }, error => console.log(error));
    }
  }

  removeCountry(country): void {
    this.favorites.splice(this.favorites.indexOf(country), 1);
  }
}
