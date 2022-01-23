import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'cardIdentity'
})
export class CardIdentityPipe implements PipeTransform {

  transform(value:any): any {

    
    
      // "assets/visa.png";

      
   if(value.length>=2){

  var res = null;

  if (parseInt(value)>0) {

   var twoNos = value.substr(0,2);

    res = (parseInt(twoNos)>=50) ? "assets/mastercard.png" : "assets/visa.png"

    return res
   
    }
   
}
   }
  
  //   var re = value.substr(0,2)
  //   var res = null
  //   if(re <50){
  //      res= "./assets/visa.png";
  //      console.log("visa")
      
  //   }

  //   else if (re > 50) {
  //      res= "./assets/mastercard.jpg"
  //      console.log("master")
      
      
  //   }
      
  }
    // var card:RegExp = /^(?:[1-9|[1-4][0-9]|50)$/
  
      


