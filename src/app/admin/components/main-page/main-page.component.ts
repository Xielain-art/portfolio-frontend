import { ComponentType } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddExperienceComponent } from './components/add-experience/add-experience.component';
import { AddPortfolioComponent } from './components/add-portfolio/add-portfolio.component';
import { AddSkillComponent } from './components/add-skill/add-skill.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  constructor(private _dialog: MatDialog, private _router: Router) {}

  ngOnInit(): void {}

  private _openModal(component: any): void {
    this._dialog.open(component, { width: '500px' });
  }

  public addSkill(): void {
    this._openModal(AddSkillComponent);
  }

  public addExperience(): void {
    this._openModal(AddExperienceComponent);
  }

  public addEducation(): void {
    this._openModal(AddEducationComponent);
  }

  public redirectToMain(): void {
    this._router.navigate(['']);
  }

  public addPortfolio(): void {
    this._openModal(AddPortfolioComponent);
  }
}
