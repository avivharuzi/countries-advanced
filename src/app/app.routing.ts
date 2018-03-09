// Modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home/home.component';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ActionsComponent } from './components/actions/actions.component';
import { AreaComponent } from './components/actions/area/area.component';
import { BordersComponent } from './components/actions/borders/borders.component';
import { CapitalComponent } from './components/actions/capital/capital.component';
import { CodeComponent } from './components/actions/code/code.component';
import { LatlngComponent } from './components/actions/latlng/latlng.component';
import { MaxlangComponent } from './components/actions/maxlang/maxlang.component';
import { PopulationAreaComponent } from './components/actions/population-area/population-area.component';
import { PopulationComponent } from './components/actions/population/population.component';
import { TimezoneComponent } from './components/actions/timezone/timezone.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'countries-list', component: CountriesListComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'actions', component: ActionsComponent, children: [
      {
        path: 'area', component: AreaComponent
      },
      {
        path: 'borders', component: BordersComponent
      },
      {
        path: 'maxlang', component: MaxlangComponent
      },
      {
        path: 'capital', component: CapitalComponent
      },
      {
        path: 'code', component: CodeComponent
      },
      {
        path: 'latlng', component: LatlngComponent
      },
      {
        path: 'population-area', component: PopulationAreaComponent
      },
      {
        path: 'population', component: PopulationComponent
      },
      {
        path: 'timezone', component: TimezoneComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
  imports: [
    appRouter
  ]
})
export class RoutingModule { }
