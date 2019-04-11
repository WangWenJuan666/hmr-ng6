import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appLimitdigits]'
})
export class LimitdigitsDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
   }
   @HostListener('mousedown', ['$event']) onmousedown(ev: any) {
    const e = ev || window.event || {};
    e.stopPropagation();
    e.preventDefault();
   }
}
