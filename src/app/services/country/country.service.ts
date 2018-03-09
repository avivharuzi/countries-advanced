import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class CountryService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:3000/api/countries';
  }

  getCountries(): Observable<any> {
    return this.http.get(this.url, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getByPopulation(countryParams): Observable<any> {
    return this.http.get(`${this.url}/population?min=${countryParams.min}&max=${countryParams.max}`,
    { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getByArea(countryParams): Observable<any> {
    return this.http.get(`${this.url}/area?min=${countryParams.min}&max=${countryParams.max}`,
    { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getByPopulationAndArea(countryParams): Observable<any> {
    return this.http.get(
      `${this.url}/globalstats?minarea=${countryParams.minArea}&maxarea=${
      countryParams.maxArea}&minpop=${countryParams.minPop}&maxpop=${countryParams.maxPop}`,
      { withCredentials: true }
    )
    .map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getBordersByCountry(countryName): Observable<any> {
    return this.http.get(`${this.url}/borders/${countryName}`, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByBorders(borders): Observable<any> {
    return this.http.get(this.url, { withCredentials: true }).map((response: any) => {
      return response.filter((country) => borders.indexOf(country.alpha3Code) > -1 );
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByCountryNames(countryNames): Observable<any> {
    return this.http.get(this.url, { withCredentials: true }).map((response: any) => {
      return response.filter((country) => countryNames.indexOf(country.name) > -1 );
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountryWithMaxLang(): Observable<any> {
    return this.http.get(`${this.url}/maxlang`, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByCapital(capitalName): Observable<any> {
    return this.http.get(`${this.url}/capital/${capitalName}`, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByTimezone(countryParams): Observable<any> {
    return this.http.get(`${this.url}/timezones?utcmin=${countryParams.utcMin}&utcmax=${countryParams.utcMax}`,
    { withCredentials: true })
    .map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByCode(code): Observable<any> {
    return this.http.get(`${this.url}/callingcode/${code}`, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByLatLng(countryParams): Observable<any> {
    return this.http.get(
      `${this.url}/latlng?topleftx=${countryParams.topLeftX}&toplefty=${
      countryParams.topLeftY}&bottomrightx=${countryParams.bottomRightX}&bottomrighty=${countryParams.bottomRightY}
      `, { withCredentials: true })
      .map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }
}
