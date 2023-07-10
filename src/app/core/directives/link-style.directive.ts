import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appLinkStyle]',
})
export class LinkStyleDirective {
  private domElement: HTMLElement;

  constructor(private elemRef: ElementRef) {
    this.domElement = this.elemRef.nativeElement;
    this.domElement.classList.add('link');
  }
}
