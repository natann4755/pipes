import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appD6]'
})
export class D6Directive {

   private ele:HTMLElement
  constructor() {}

  @HostListener ('blur') bkar(){
    alert("dont line me!!!")
  }

}
