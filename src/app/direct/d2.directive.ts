import { Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appD2]'
})
export class D2Directive {

  ele:HTMLElement
  constructor(el:ElementRef) {
    this.ele=el.nativeElement
   }

   @HostListener('mouseenter') hiden(){
    this.ele.style.display = "none"
   }

}
