import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-flex-list',
  templateUrl: './flex-list.component.html',
  styleUrls: ['./flex-list.component.sass'],
})
export class FlexListComponent implements OnInit {
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
