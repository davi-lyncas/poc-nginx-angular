import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHelperService } from '../http/http-helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url: string;

  constructor(private http: HttpHelperService) {
    this.url = environment.api_path;
  }

  getRefreshToken(refreshToken: string): Promise<unknown> {
    return this.http.post(
      `${this.url}/token`,
      {
        grant_type: 'refresh_token',
        client_id: 'eBox',
        refresh_token: refreshToken,
      },
    )
  }

  getUserIdentity(): Promise<unknown> {
    return this.http.get(`${this.url}/getUserIdentity`);
  }

  getZendeskRedirectUrlJwt(returnTo: string): Promise<unknown> {
    return this.http.get(`${this.url}/getZendeskRedirectUrlJwt`, {
      params: { returnTo }
    });
  }

  signInAnotherCustomer(login: string, clienteId: number): Promise<unknown> {
    return this.http.get(`${this.url}/signInAnotherCustomer`, {
      params: { login: login, clienteId: clienteId }
    });
  }
}

