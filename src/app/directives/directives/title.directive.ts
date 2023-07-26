import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appTitle]',
})
export class TitleDirective implements OnChanges {
  @Input() fontSizeType: 'h1' | 'h2' = 'h1';

  private domElement: HTMLElement;

  constructor(private elemRef: ElementRef) {
    this.domElement = this.elemRef.nativeElement;
    this.init();
  }

  private init(): void {
    this.domElement.classList.add('title');
    return;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fontSizeType']) {
      this.domElement.classList.add('title2', 'maxLg:text-center');
    }
  }
}
