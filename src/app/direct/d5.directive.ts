import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appD5]'
})
export class D5Directive {

  // inpu:HTMLElement
  // constructor(private ein:ElementRef) {
  //   this.inpu = ein.nativeElement
  //  }
  //  @HostListener('input') onttInput(){
  //    this.showlog();
  //  }
  //  showlog(){
  //    console.log(this.ein.nativeElement.value);
     
  //  }

  int:HTMLElement

  constructor(private el:ElementRef){
    this.int=el.nativeElement
  }

  @HostListener ('input') input (){
    console.log("intut a",this.el.nativeElement.value);
  }

  @HostListener ('click') clic (){
    console.log("clicik",this.el.nativeElement.value);
  }
}
