import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Add token to request if it exists
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        // If 401 error and we have a token, try to refresh
        if (error.status === 401 && this.authService.getToken()) {
          return this.authService.refreshAccessToken().pipe(
            switchMap((response: any) => {
              // Update token and retry the request
              this.authService.setToken(response.access);
              const newRequest = request.clone({
                setHeaders: {
                  Authorization: `Bearer ${response.access}`
                }
              });
              return next.handle(newRequest);
            }),
            catchError(() => {
              // If refresh fails, logout
              this.authService.logout();
              return throwError(error);
            })
          );
        }
        return throwError(error);
      })
    );
  }
}
