import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from 'src/app/core/models/skill.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.sass'],
})
export class SkillsListComponent implements OnInit {
  @Input() skills: ISkill[] = [];

  constructor() {}

  ngOnInit(): void {}
}
