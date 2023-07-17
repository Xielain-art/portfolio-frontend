import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective {
  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.classList.add(
      ...'transition duration-300 ease-in-out hover:opacity-40'.split(' ')
    );
  }
}
