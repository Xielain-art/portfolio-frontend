import { Overlay } from '@angular/cdk/overlay';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MobileMenuComponent } from '../mobile-menu/mobile-menu.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  isMobile: boolean = false;
  constructor(private dialog: MatDialog, private overlay: Overlay) {}

  ngOnInit(): void {
    this.isMobile = window.innerWidth < 992;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isMobile = window.innerWidth < 992;
    if (!this.isMobile) {
      this.dialog.closeAll();
    }
  }

  openMenu(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.scrollStrategy = this.overlay.scrollStrategies.noop();
    this.dialog.open(MobileMenuComponent, dialogConfig);
  }
}
