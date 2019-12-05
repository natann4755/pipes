import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips4'
})
export class Pips4Pipe implements PipeTransform {

  transform(str:string): string {
    return str[0].toLowerCase()+str.substr(1,str.length);
  }

}
