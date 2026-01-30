import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly baseUrl = 'https://swapi.dev/api';
  private readonly http = inject(HttpClient);

  public get<T>(url: string) {
    console.log('get At: ', this.baseUrl + url);
    return this.http.get<T>(this.baseUrl + url);
  }
}
