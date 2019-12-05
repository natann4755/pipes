import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips7'
})
export class Pips7Pipe implements PipeTransform {

  transform(value:number): number {
    return ++value;
  }

}
