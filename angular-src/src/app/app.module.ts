// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HomeComponent } from './components/home/home.component';
import { CountryComponent } from './components/country/country.component';
import { CountriesComponent } from './components/countries/countries.component';
import { ActionsComponent } from './components/actions/actions.component';
import { PopulationComponent } from './components/actions/population/population.component';
import { AreaComponent } from './components/actions/area/area.component';
import { PopulationAreaComponent } from './components/actions/population-area/population-area.component';
import { BordersComponent } from './components/actions/borders/borders.component';
import { MaxlangComponent } from './components/actions/maxlang/maxlang.component';
import { CapitalComponent } from './components/actions/capital/capital.component';
import { TimezoneComponent } from './components/actions/timezone/timezone.component';
import { CodeComponent } from './components/actions/code/code.component';
import { LatlngComponent } from './components/actions/latlng/latlng.component';
import { NavActionsComponent } from './components/actions/nav-actions/nav-actions.component';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { NoResultComponent } from './components/no-result/no-result.component';
import { CountryFavoriteComponent } from './components/country-favorite/country-favorite.component';

// Services
import { ValidationService } from './services/validation/validation.service';
import { CountryService } from './services/country/country.service';
import { FavoriteService } from './services/favorite/favorite.service';

// Pipes
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
import { SearchPipe } from './pipes/search/search.pipe';

// Ngx Bootstrap Modules
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorPageComponent,
    CountriesListComponent,
    HomeComponent,
    CountryComponent,
    CountriesComponent,
    ActionsComponent,
    PopulationComponent,
    AreaComponent,
    PopulationAreaComponent,
    BordersComponent,
    MaxlangComponent,
    CapitalComponent,
    TimezoneComponent,
    CodeComponent,
    LatlngComponent,
    NavActionsComponent,
    FormErrorComponent,
    CapitalizePipe,
    NoResultComponent,
    FavoritesComponent,
    CountryFavoriteComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule.forRoot(),
    NgProgressModule.forRoot(),
    NgProgressHttpModule
  ],
  providers: [
    CountryService,
    ValidationService,
    FavoriteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
