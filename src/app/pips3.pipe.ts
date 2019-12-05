import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips3'
})
export class Pips3Pipe implements PipeTransform {

  transform(str:string): string {
    return str.toUpperCase();
  }

}
