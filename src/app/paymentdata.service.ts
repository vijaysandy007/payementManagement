import { CurrencyPipe } from '@angular/common';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentdataService {

  constructor() { }


paymentInfo =[{name:"vijay", price:250 , cardno:"1234567891234567"},
{name:"surya", price:500, cardno:"8415277924617978"}
]

addData(){
  return this.paymentInfo
}

receiveData(f:any){
  // Name:any,Price:any,Cardno:any
 var removeSpace = f.cardno.replace(/\s/g,"")
  this.paymentInfo.push({"name":f.name,"price":f.price,"cardno":removeSpace});
  
  
}




deleteButton(remove:any){

  this.paymentInfo.splice(remove,1)

}
upDateButton(fName:any,Price:any,cardnumber:any,index:any){

 this.paymentInfo.splice(index,1,{'name':fName,'price':Price,'cardno':cardnumber})

 

}

 

}

