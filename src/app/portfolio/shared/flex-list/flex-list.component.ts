import { Component, Input, OnInit } from '@angular/core';
import { IEducation } from 'src/app/core/models/education.model';
import { IExperience } from 'src/app/core/models/experience.model';

@Component({
  selector: 'app-flex-list',
  templateUrl: './flex-list.component.html',
  styleUrls: ['./flex-list.component.sass'],
})
export class FlexListComponent implements OnInit {
  @Input() title!: string;
  @Input() data: IExperience[] | IEducation[] = [];
  constructor() {}

  ngOnInit(): void {}
}
