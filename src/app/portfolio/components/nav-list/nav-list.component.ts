import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.sass'],
})
export class NavListComponent implements OnInit {
  constructor(private viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {}

  onClickScroll(elementId: string): void {
    this.viewPortScroller.scrollToAnchor(elementId);
  }
}
