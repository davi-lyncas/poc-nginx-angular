import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs'
import { environment } from 'src/environments/environment';

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

  private baseUrl = environment.api_path;

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: { params?: Params }): Promise<T> {
    return firstValueFrom(this.http.get<T>(`${this.baseUrl}/${url}`, options));
  }

  post<T>(url: string, body: object, options?: { headers: Headers }): Promise<T> {
    return firstValueFrom(this.http.post<T>(`${this.baseUrl}/${url}`, body, options));
  }

  put<T>(url: string, body: object, options?: { headers: Headers }): Promise<T> {
    return firstValueFrom(this.http.put<T>(`${this.baseUrl}/${url}`, body, options));
  }

  delete<T>(url: string, body: object, options?: { headers: Headers }): Promise<T> {
    return firstValueFrom(this.http.delete<T>(`${this.baseUrl}/${url}`, options));
  }
}
