import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEducation } from 'src/app/core/models/education.model';
import { IEmailBody } from 'src/app/core/models/email-body.model';
import { IExperience } from 'src/app/core/models/experience.model';
import { IPortfolio } from 'src/app/core/models/portfolio.model';
import { ISkill } from 'src/app/core/models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  experience$: Observable<IExperience[]> =
    this.http.get<IExperience[]>('/api/experience');
  portfolio$: Observable<IPortfolio[]> =
    this.http.get<IPortfolio[]>('/api/portfolio');
  skills$: Observable<ISkill[]> = this.http.get<ISkill[]>('/api/skill');
  education$: Observable<IEducation[]> =
    this.http.get<IEducation[]>('/api/education');

  constructor(private http: HttpClient) {}

  public sendEmail(data: IEmailBody): Observable<{ status: string }> {
    return this.http.post<{ status: string }>('/api/mail', data).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
      })
    );
  }
}
