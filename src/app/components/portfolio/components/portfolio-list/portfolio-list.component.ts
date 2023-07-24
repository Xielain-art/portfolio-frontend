import { Component, Input, OnInit } from '@angular/core';
import { Portfolio } from 'src/app/core/models/portfolio.model';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.sass']
})
export class PortfolioListComponent implements OnInit {

  @Input() portfolioList: Portfolio[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
