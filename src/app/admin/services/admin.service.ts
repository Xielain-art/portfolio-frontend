import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { IEducation } from 'src/app/core/models/education.model';
import { IExperience } from 'src/app/core/models/experience.model';
import { ILoginResponse } from 'src/app/core/models/login-response.model';
import { IPortfolio } from 'src/app/core/models/portfolio.model';
import { ISkill } from 'src/app/core/models/skill.model';
import { HttpService } from 'src/app/portfolio/core/services/http.service';
import { IApiResponse } from '../../core/models/api-respone.model';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private injectionToken: string | null = null;

  constructor(private _http: HttpClient, private _router: Router) {}

  public isLoggedIn(): boolean {
    return Boolean(this.injectionToken);
  }

  public login(body: ILoginResponse): Observable<ILoginResponse> {
    return this._http.post<ILoginResponse>('api/auth/login', body).pipe(
      tap((data) => {
        this.injectionToken = data.accessToken;
        TokenInterceptor.token = this.injectionToken;
        this._router.navigate(['admin', 'main']);
      }),
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public addSkill(data: ISkill): Observable<IApiResponse> {
    return this._http.post<IApiResponse>('api/skill', data).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public addExperience(data: IExperience): Observable<IApiResponse> {
    return this._http.post<IApiResponse>('api/experience', data).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public addEducation(data: IEducation): Observable<IApiResponse> {
    return this._http.post<IApiResponse>('api/education', data).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }

  public addPortfolio(data: IPortfolio): Observable<IApiResponse> {
    const form = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      form.append(key, value);
    });

    return this._http.post<IApiResponse>('api/portfolio', form).pipe(
      catchError((err) => {
        return throwError(() => err);
      })
    );
  }
}
