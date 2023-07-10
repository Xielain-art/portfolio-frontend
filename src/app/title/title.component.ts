import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
})
export class TitleComponent implements OnInit {
  @Input() renderAs: 'h1' | 'h2' = 'h1';
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {}
}
