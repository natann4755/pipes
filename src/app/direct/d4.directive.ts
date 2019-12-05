import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appD4]'
})
export class D4Directive {

  private ele:HTMLElement
  constructor(el:ElementRef) {
    this.ele= el.nativeElement
   }

   @HostListener ('mouseenter') opi(){
     this.ele.style.opacity="0"
   }

   @HostListener ('click') clic(){
    this.ele.style.opacity="1"
    console.log("click!!!!");

    
  }

}
