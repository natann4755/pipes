import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pips10'
})
export class Pips10Pipe implements PipeTransform {

  transform(val:string, arrr:string[]): string {
    console.log('val = ',val,'arrr = ',arrr);
    let arrrr = arrr.filter(aa=> aa==val);
    
    return arrrr.toString();
  }

}
