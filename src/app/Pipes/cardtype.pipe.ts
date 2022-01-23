import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardtype'
})
export class CardtypePipe implements PipeTransform {

  transform(value: any,cardno:number=4): any {
    console.log("card pipe created")
    var re = value.slice(0,-cardno)
    var showdata = value.slice(-cardno)
    return re.replace(/./g,'*')+showdata;

      
  }
  

}
