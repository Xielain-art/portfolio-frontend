import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 992;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isMobile = window.innerWidth < 992;
  }
}
