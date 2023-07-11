import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTitle]',
})
export class TitleDirective {
  @Input() fontSizeType: 'h1' | 'h2' = 'h1';

  private domElement: HTMLElement;

  constructor(private elemRef: ElementRef) {
    this.domElement = this.elemRef.nativeElement;
    this.fontSizeType === 'h1'
      ? this.domElement.classList.add('title')
      : this.domElement.classList.add('title', 'title2');
  }
}
