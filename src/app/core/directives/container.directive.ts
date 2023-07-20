import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appContainer]',
})
export class ContainerDirective implements OnInit {
  private domElement!: HTMLElement;

  constructor(private elementRef: ElementRef, private render: Renderer2) {
    //   'xl:w-[1200px]',
    // );
  }
  ngOnInit(): void {
    this.render.setAttribute(
      this.elementRef.nativeElement,
      'class',
      'xl:w-[1200px] lg:w-[970px] md:w-[750px] px-[15px] mx-auto'
    );
  }
}
