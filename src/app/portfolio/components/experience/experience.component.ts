import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
})
export class ExperienceComponent implements OnInit {
  experience$ = this.httpService.experience$;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}
}
