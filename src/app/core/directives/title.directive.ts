import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]',
})
export class TitleDirective {
  private domElement: HTMLElement;
  constructor(private elemRef: ElementRef) {
    this.domElement = this.elemRef.nativeElement;
    this.domElement.classList.add('title');
  }
}
