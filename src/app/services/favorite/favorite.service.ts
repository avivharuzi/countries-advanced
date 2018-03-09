import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

@Injectable()
export class FavoriteService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = 'http://localhost:3000/api/favorites';
  }

  getCountries(): Observable<any> {
    return this.http.get(this.url, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  setCountry(country: any): Observable<any> {
    return this.http.post(this.url, country, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }

  deleteCountry(country: any): Observable<any> {
    return this.http.delete(`${this.url}/${country}`, { withCredentials: true }).map(response => {
      return response;
    }, (err: HttpErrorResponse) => {
      return err;
    });
  }
}
