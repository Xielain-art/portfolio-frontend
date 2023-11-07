import { HostListener, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsMobileService implements OnInit {
  isMobile!: boolean;

  constructor() {}
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 992;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isMobile = window.innerWidth < 992;
    console.log(this.isMobile);
  }
}
