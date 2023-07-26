import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';
import { MobileMenuComponent } from './components/mobile-menu/mobile-menu.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioDialogComponent } from './components/portfolio-section/components/portfolio-dialog/portfolio-dialog.component';
import { PortfolioListComponent } from './components/portfolio-section/components/portfolio-list/portfolio-list.component';
import { PortfolioListItemComponent } from './components/portfolio-section/components/portfolio-list-item/portfolio-list-item.component';
import { SkillsListComponent } from './components/skills/components/skills-list/skills-list.component';
import { SkillsListItemComponent } from './components/skills/components/skills-list-item/skills-list-item.component';
import { FlexListComponent } from './shared/flex-list/flex-list.component';
import { FlexListItemComponent } from './shared/flex-list/components/flex-list-item/flex-list-item.component';
import { TitleComponent } from './shared/title/title.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DirectivesModule } from '../directives/directives.module';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    AboutMeComponent,
    ContactComponent,
    EducationComponent,
    ExperienceComponent,
    HeaderComponent,
    MobileMenuComponent,
    NavListComponent,
    PortfolioSectionComponent,
    SkillsComponent,
    PortfolioDialogComponent,
    PortfolioListComponent,
    PortfolioListItemComponent,
    SkillsListComponent,
    SkillsListItemComponent,
    FlexListComponent,
    FlexListItemComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    DirectivesModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
})
export class PortfolioModule {}
