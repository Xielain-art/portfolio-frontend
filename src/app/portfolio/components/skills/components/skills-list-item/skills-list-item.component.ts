import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-list-item',
  templateUrl: './skills-list-item.component.html',
  styleUrls: ['./skills-list-item.component.sass'],
})
export class SkillsListItemComponent implements OnInit {
  @Input() title!: string;
  @Input() description: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
