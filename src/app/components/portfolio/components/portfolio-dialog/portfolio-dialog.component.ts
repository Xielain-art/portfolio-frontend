import {
  BreakpointObserver,
  BreakpointState,
  MediaMatcher,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './portfolio-dialog.component.html',
})
export class PortfolioDialogComponent {
  constructor(public dialogRef: MatDialogRef<PortfolioDialogComponent>) {}
}
