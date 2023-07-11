import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appContainer]',
})
export class ContainerDirective {
  private domElement!: HTMLElement;

  constructor(private elementRef: ElementRef) {
    this.domElement = this.elementRef.nativeElement;
    this.domElement.classList.add(
      'xl:w-[1200px]',
      'lg:w-[970px]',
      'md:w-[750px]',
      'mx-auto',
      'px-[15px]'
    );
  }
}
