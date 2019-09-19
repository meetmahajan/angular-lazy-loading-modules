import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.style.backgroundColor = '#efeeed';
    console.log(`* Shared highlight called for ${elementRef.nativeElement.tagName}`);
  }
}
