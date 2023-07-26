import {
  BreakpointObserver,
  BreakpointState,
  MediaMatcher,
  Breakpoints,
} from '@angular/cdk/layout';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DialogData } from '../../models/dialog-data.model';

@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './portfolio-dialog.component.html',
})
export class PortfolioDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PortfolioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
