import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appD1]'
})
export class D1Directive {

  elem:HTMLElement
  @Input ('appD1') color:string

  constructor(el:ElementRef) { 
    this.elem= el.nativeElement
    console.log("d1 work");
  }

  @HostListener('click') shut(){
   this.elem.style.backgroundColor = this.color
  }

  @HostListener('mouseenter') ccolor (){
    this.elem.style.backgroundColor=this.color
    console.log(this.color);
    

  } 

}
