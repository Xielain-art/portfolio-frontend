import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass'],
})
export class AboutMeComponent implements OnInit {
  constructor(private _viewPortScroller: ViewportScroller) {}

  ngOnInit(): void {}

  public onClickScroll(elementId: string): void {
    this._viewPortScroller.scrollToAnchor(elementId);
  }

}
