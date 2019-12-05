import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips6'
})
export class Pips6Pipe implements PipeTransform {

  transform(val:string):string {
    return "helloo "+val;
  }

}
