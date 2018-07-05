import { Injectable } from '@angular/core';
import {Currency} from '../models/currency';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class CurrenciesService {

  private url = environment.openfintechUrl;

  constructor(private httpClient: HttpClient) { }

  private buildHttpOptions(params?: HttpParams) {
    const options: any = {
      headers: {'Accept': 'application/vnd.api+json'},
    };
    if (params) {
      options.params = params;
    }
    return options;
  }

  getCurrencies(pageSize): Observable<Currency[]> {
    return this.httpClient.get<Currency[]>(`${this.url}/currencies`, this.buildHttpOptions(new HttpParams().set('page[size]', pageSize)))
      .pipe(map((response: any): Currency[] => {
        return response.data;
      }));
  }

  getCurrency(id: string): Observable<Currency> {
    return this.httpClient.get<Currency>(`${this.url}/currencies/${id}`, this.buildHttpOptions())
      .pipe(map((response: any): Currency => {
        return response.data;
      }));
  }
}
