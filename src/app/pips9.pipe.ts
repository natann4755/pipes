import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips9'
})
export class Pips9Pipe implements PipeTransform {

  transform(num:number,val:string[]): string {
    let arr=[]
    for (let i = 0; i < num; i++) {
      arr.push(val[i])
    }
    return arr.toString();
  }

}
