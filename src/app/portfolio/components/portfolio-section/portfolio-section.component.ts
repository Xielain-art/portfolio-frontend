import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../core/services/http.service';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.sass'],
})
export class PortfolioSectionComponent implements OnInit {
  portfolio$ = this.httpService.portfolio$;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}
}
