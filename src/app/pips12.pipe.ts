import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips12'
})
export class Pips12Pipe implements PipeTransform {

  transform(ar:number[]): number {
    let n = Math.min(...ar)
    return n;
  }

}
