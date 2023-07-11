import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTextStyle]',
})
export class TextStyleDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.classList.add('opacity-80');
  }
}
