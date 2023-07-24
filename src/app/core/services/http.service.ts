import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education.model';
import { Experience } from '../models/experience.model';
import { Portfolio } from '../models/portfolio.model';
import { Skill } from '../models/skill.model';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  experience$: Observable<Experience[]> =
    this.http.get<Experience[]>('/api/experience');
  portfolio$: Observable<Portfolio[]> =
    this.http.get<Portfolio[]>('/api/portfolio');
  skills$: Observable<Skill[]> = this.http.get<Skill[]>('/api/skill');
  education$: Observable<Education[]> =
    this.http.get<Education[]>('/api/education');

  constructor(private http: HttpClient) {}
}
