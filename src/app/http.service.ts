import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHttpService } from './http.service.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements IHttpService {

  private readonly baseUrl = environment.url;

  constructor(private http: HttpClient) { }

  get<T>(path: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${path}`, {
      headers: headers
    });
  }
}
