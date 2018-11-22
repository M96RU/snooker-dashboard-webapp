import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse
} from '@angular/common/http';
import {AuthService} from './auth.service';
import {Observable} from "rxjs/internal/Observable";
import {tap} from "rxjs/operators";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem("token");

    if (token) {
      let tokenizedRequest = request.clone({
        setHeaders: {
          'Authorization': "Bearer " + token
        }
      })
      return next.handle(tokenizedRequest);
    } else {
      return next.handle(request);
    }
  }
}
