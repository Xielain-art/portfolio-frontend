import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TitleDirective } from './core/directives/title.directive';
import { LinkStyleDirective } from './core/directives/link-style.directive';
import { TitleComponent } from './title/title.component';
import { NavListComponent } from './nav-list/nav-list.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TitleDirective, LinkStyleDirective, TitleComponent, NavListComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [TitleDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
