import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IPortfolio } from 'src/app/core/models/portfolio.model';
import { environment } from 'src/environments/environment';
import { DialogData } from '../../models/dialog-data.model';
import { PortfolioDialogComponent } from '../portfolio-dialog/portfolio-dialog.component';

@Component({
  selector: 'app-portfolio-list-item',
  templateUrl: './portfolio-list-item.component.html',
  styleUrls: ['./portfolio-list-item.component.sass'],
})
export class PortfolioListItemComponent {
  @Input() portfolioItem: IPortfolio | undefined;

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
