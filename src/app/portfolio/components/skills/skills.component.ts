import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass'],
})
export class SkillsComponent implements OnInit {
  skills$ = this.httpService.skills$;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}
}
