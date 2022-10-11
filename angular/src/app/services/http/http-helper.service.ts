import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs'

interface Headers {
  [key: string]: string;
}

interface Params {
  [name: string]: string | number;
}

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: { params?: Params }): Promise<T> {
    return firstValueFrom(this.http.get<T>(url, options));
  }

  post<T>(url: string, body: object, options?: { headers: Headers }): Promise<T> {
    return firstValueFrom(this.http.post<T>(url, body, options));
  }

  put<T>(url: string, body: object, options?: { headers: Headers }): Promise<T> {
    return firstValueFrom(this.http.put<T>(url, body, options));
  }

  delete<T>(url: string, body: object, options?: { headers: Headers }): Promise<T> {
    return firstValueFrom(this.http.delete<T>(url, options));
  }
}
