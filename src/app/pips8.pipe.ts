import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips8'
})
export class Pips8Pipe implements PipeTransform {

  transform(value:number): number {
    return --value;
  }

}
