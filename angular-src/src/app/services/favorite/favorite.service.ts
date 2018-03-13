import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BASE_FAVORITES_URL } from '../../constants/urls';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class FavoriteService {
  constructor(public http: HttpClient) { }

  getCountries(): Observable<any> {
    return this.http.get(BASE_FAVORITES_URL, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  setCountry(country: any): Observable<any> {
    return this.http.post(BASE_FAVORITES_URL, country, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  deleteCountry(country: any): Observable<any> {
    return this.http.delete(`${BASE_FAVORITES_URL}/${country}`, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }
}
