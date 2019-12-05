import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips1'
})
export class Pips1Pipe implements PipeTransform {

  transform(str:string): string {
    return str[0].toUpperCase()+str.substr(1,str.length);
  }

}
