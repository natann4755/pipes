import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips2'
})
export class Pips2Pipe implements PipeTransform {

  transform(d:Date): string {
    let dd = d.getDay()+":"+d.getMonth()+":"+d.getFullYear()
    return dd
  }

}
