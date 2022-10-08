import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.authorizationHeader != null && request != undefined) {
      const cloned = request.clone({ headers: request.headers.set("Authorization", this.authService.authorizationHeader) })
      return next.handle(cloned).pipe(
        tap((event: any) => {
          console.log(event)
        }, (error: { status: number; message: string; }) => {
          console.log(`Request: ${error.status} -> ${error.message}`)
        })
      )
    }

    return next.handle(request);
  }
}
