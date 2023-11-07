import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DirectivesModule } from '../directives/directives.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AddSkillComponent } from './components/main-page/components/add-skill/add-skill.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ModalWindowComponent } from './components/main-page/components/modal-window/modal-window.component';
import { AddExperienceComponent } from './components/main-page/components/add-experience/add-experience.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { AddEducationComponent } from './components/main-page/components/add-education/add-education.component';
import { AddPortfolioComponent } from './components/main-page/components/add-portfolio/add-portfolio.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { ItemsListComponent } from './shared/items-list/items-list.component';
import { ItemsListFormControlComponent } from './shared/items-list/items-list-form-control/items-list-form-control.component';

@NgModule({
  declarations: [
    AdminComponent,
    LoginPageComponent,
    MainPageComponent,
    AddSkillComponent,
    ModalWindowComponent,
    AddExperienceComponent,
    AddEducationComponent,
    AddPortfolioComponent,
    SkillListComponent,
    ItemsListComponent,
    ItemsListFormControlComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DirectivesModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
  ],
})
export class AdminModule {}
