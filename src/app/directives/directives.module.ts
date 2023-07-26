import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorderDirective } from './directives/border.directive';
import { ContainerDirective } from './directives/container.directive';
import { HoverDirective } from './directives/hover.directive';
import { LinkStyleDirective } from './directives/link-style.directive';
import { TextStyleDirective } from './directives/text-style.directive';
import { TitleDirective } from './directives/title.directive';

@NgModule({
  declarations: [
    BorderDirective,
    ContainerDirective,
    HoverDirective,
    LinkStyleDirective,
    TextStyleDirective,
    TitleDirective,
  ],
  imports: [CommonModule],
  exports: [
    BorderDirective,
    ContainerDirective,
    HoverDirective,
    LinkStyleDirective,
    TextStyleDirective,
    TitleDirective,
  ],
})
export class DirectivesModule {}
