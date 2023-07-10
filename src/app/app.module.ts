import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { TitleDirective } from './core/directives/title.directive';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TitleDirective],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  exports: [TitleDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
