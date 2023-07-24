import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { PortfolioDialogComponent } from './components/portfolio-dialog/portfolio-dialog.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.sass'],
})
export class PortfolioComponent implements OnInit {
  portfolio$ = this.httpService.portfolio$;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}
}
