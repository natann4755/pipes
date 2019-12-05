import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips5'
})
export class Pips5Pipe implements PipeTransform {

  transform(str:string): string {
    return str.toLowerCase()
  }

}
