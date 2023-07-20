import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TitleDirective } from './core/directives/title.directive';
import { LinkStyleDirective } from './core/directives/link-style.directive';
import { TitleComponent } from './shared/title/title.component';
import { NavListComponent } from './components/nav-list/nav-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContainerDirective } from './core/directives/container.directive';
import { BorderDirective } from './core/directives/border.directive';
import { SkillsComponent } from './components/skills/skills.component';
import { TextStyleDirective } from './core/directives/text-style.directive';
import { SkillsListComponent } from './components/skills/components/skills-list/skills-list.component';
import { SkillsListItemComponent } from './components/skills/components/skills-list-item/skills-list-item.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { FlexListComponent } from './shared/flex-list/flex-list.component';
import { FlexListItemComponent } from './shared/flex-list/components/flex-list-item/flex-list-item.component';
import { EducationComponent } from './components/education/education.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MatCardModule } from '@angular/material/card';
import { HoverDirective } from './core/directives/hover.directive';
import { PortfolioDialogComponent } from './components/portfolio/components/portfolio-dialog/portfolio-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LayoutModule } from '@angular/cdk/layout';
import { PortfolioListComponent } from './components/portfolio/components/portfolio-list/portfolio-list.component';
import { PortfolioListItemComponent } from './components/portfolio/components/portfolio-list-item/portfolio-list-item.component';
import { ContactComponent } from './components/contact/contact.component';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TitleDirective,
    LinkStyleDirective,
    TitleComponent,
    NavListComponent,
    AboutMeComponent,
    ContainerDirective,
    BorderDirective,
    SkillsComponent,
    TextStyleDirective,
    SkillsListComponent,
    SkillsListItemComponent,
    ExperienceComponent,
    FlexListComponent,
    FlexListItemComponent,
    EducationComponent,
    PortfolioComponent,
    HoverDirective,
    PortfolioDialogComponent,
    PortfolioListComponent,
    PortfolioListItemComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    LayoutModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
