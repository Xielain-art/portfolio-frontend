import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.sass'],
})
export class MobileMenuComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<MobileMenuComponent>) {}

  ngOnInit(): void {}
}
