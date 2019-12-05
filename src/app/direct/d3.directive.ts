import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appD3]'
})
export class D3Directive {

  elee:HTMLElement
  constructor(el:ElementRef) {
    this.elee=el.nativeElement
   }

   @HostListener('click') big(){
     this.elee.style.fontSize="1.8em"
   }

}
