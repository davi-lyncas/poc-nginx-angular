import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private auth: AuthenticationService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const updated = req.clone();

    if (!req.url.includes('blob.core.windows.net'))
      this.setAuthorization(updated);

    return next.handle(updated);
    //ADD HANDLE FOR 400/401 RESPONSES
  }

  private logout() { }

  private setAuthorization(req: HttpRequest<unknown>) {
    const token = localStorage.getItem('token');
    req.headers.set('Authorization', `Bearer ${token}`);
  }
}
