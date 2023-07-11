import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class BorderDirective {
  private domElement!: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement;
    this.domElement.classList.add('border-b-[1px]', 'border-gray-300');
  }
}
