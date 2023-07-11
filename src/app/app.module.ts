import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TitleDirective } from './core/directives/title.directive';
import { LinkStyleDirective } from './core/directives/link-style.directive';
import { TitleComponent } from './shared/title/title.component';
import { NavListComponent } from './nav-list/nav-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContainerDirective } from './core/directives/container.directive';
import { BorderDirective } from './core/directives/border.directive';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
