import { Component, Input, OnInit } from '@angular/core';
import { Skill } from 'src/app/core/models/skill.model';

@Component({
  selector: 'app-skills-list',
  templateUrl: './skills-list.component.html',
  styleUrls: ['./skills-list.component.sass'],
})
export class SkillsListComponent implements OnInit {
  @Input() skills: Skill[] = [];

  constructor() {}

  ngOnInit(): void {}
}
