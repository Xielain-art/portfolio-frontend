import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from '@angular/cdk/layout';
import { TextFieldModule } from '@angular/cdk/text-field';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BorderDirective } from './directives/directives/border.directive';
import { ContainerDirective } from './directives/directives/container.directive';
import { HoverDirective } from './directives/directives/hover.directive';
import { LinkStyleDirective } from './directives/directives/link-style.directive';
import { TextStyleDirective } from './directives/directives/text-style.directive';
import { TitleDirective } from './directives/directives/title.directive';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
