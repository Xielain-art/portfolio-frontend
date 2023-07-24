import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Portfolio } from 'src/app/core/models/portfolio.model';
import { DialogData } from '../../models/dialog-data.model';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-portfolio-list-item',
  templateUrl: './portfolio-list-item.component.html',
  styleUrls: ['./portfolio-list-item.component.sass'],
})
export class PortfolioListItemComponent {
  @Input() portfolioItem: Portfolio | undefined;

  staticUrl = environment.staticUrl;

  constructor(private dialog: MatDialog) {}

  openDialog(data: DialogData): void {
    this.dialog.open(PortfolioDialogComponent, {
      width: '850px',
      height: '100%',
      data: { ...data, image: `${this.staticUrl}/${data.image}` },
    });
  }
}
