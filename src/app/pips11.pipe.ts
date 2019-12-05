import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips11'
})
export class Pips11Pipe implements PipeTransform {

  transform(ar:number[]): number {
    let n = Math.max(...ar)
    return n;
  }

}
