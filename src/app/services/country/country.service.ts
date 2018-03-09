import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BASE_COUNTRIES_URL } from './../../constants/urls';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class CountryService {
  constructor(public http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(BASE_COUNTRIES_URL, { withCredentials: true }).map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getByPopulation(countryParams): Observable<any> {
    return this.http.get(`${BASE_COUNTRIES_URL}/population?min=${countryParams.min}&max=${countryParams.max}`,
    { withCredentials: true }).map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getByArea(countryParams): Observable<any> {
    return this.http.get(`${BASE_COUNTRIES_URL}/area?min=${countryParams.min}&max=${countryParams.max}`,
    { withCredentials: true }).map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getByPopulationAndArea(countryParams): Observable<any> {
    return this.http.get(
      `${BASE_COUNTRIES_URL}/globalstats?minarea=${countryParams.minArea}&maxarea=${
      countryParams.maxArea}&minpop=${countryParams.minPop}&maxpop=${countryParams.maxPop}`,
      { withCredentials: true }
    )
    .map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getBordersByCountry(countryName): Observable<any> {
    return this.http.get(`${BASE_COUNTRIES_URL}/borders/${countryName}`, { withCredentials: true }).map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByBorders(borders): Observable<any> {
    return this.http.get(BASE_COUNTRIES_URL, { withCredentials: true }).map((res: any) => {
      return res.filter((country) => borders.indexOf(country.alpha3Code) > -1 );
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByCountryNames(countryNames): Observable<any> {
    return this.http.get(BASE_COUNTRIES_URL, { withCredentials: true }).map((res: any) => {
      return res.filter((country) => countryNames.indexOf(country.name) > -1 );
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountryWithMaxLang(): Observable<any> {
    return this.http.get(`${BASE_COUNTRIES_URL}/maxlang`, { withCredentials: true }).map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByCapital(capitalName): Observable<any> {
    return this.http.get(`${BASE_COUNTRIES_URL}/capital/${capitalName}`, { withCredentials: true }).map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByTimezone(countryParams): Observable<any> {
    return this.http.get(`${BASE_COUNTRIES_URL}/timezones?utcmin=${countryParams.utcMin}&utcmax=${countryParams.utcMax}`,
    { withCredentials: true })
    .map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByCode(code): Observable<any> {
    return this.http.get(`${BASE_COUNTRIES_URL}/callingcode/${code}`, { withCredentials: true }).map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  getCountriesByLatLng(countryParams): Observable<any> {
    return this.http.get(
      `${BASE_COUNTRIES_URL}/latlng?topleftx=${countryParams.topLeftX}&toplefty=${
      countryParams.topLeftY}&bottomrightx=${countryParams.bottomRightX}&bottomrighty=${countryParams.bottomRightY}
      `, { withCredentials: true })
      .map(res => {
      return res;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }
}
