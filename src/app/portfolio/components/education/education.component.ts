import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass'],
})
export class EducationComponent implements OnInit {
  education$ = this.httpService.education$;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}
}
