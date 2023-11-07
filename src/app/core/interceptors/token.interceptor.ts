import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  static token: string | null = null;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (TokenInterceptor.token) {
      const requestCopy = request.clone({
        headers: request.headers.set(
          'Authorization',
          `Bearer ${TokenInterceptor.token}`
        ),
      });
      return next.handle(requestCopy);
    }

    return next.handle(request);
  }
}
