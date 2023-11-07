import { Component, Input, OnInit } from '@angular/core';
import { IEducation } from 'src/app/core/models/education.model';
import { IExperience } from 'src/app/core/models/experience.model';

@Component({
  selector: 'app-flex-list-item',
  templateUrl: './flex-list-item.component.html',
  styleUrls: ['./flex-list-item.component.sass'],
})
export class FlexListItemComponent implements OnInit {
  @Input() flexItem: IExperience | IEducation | null = null;
  constructor() {}

  ngOnInit(): void {}
}
