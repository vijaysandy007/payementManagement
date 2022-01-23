import { ThrowStmt } from '@angular/compiler';
import { fn } from '@angular/compiler/src/output/output_ast';
import { Component,  EventEmitter,   Input,   OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentdataService } from '../paymentdata.service';


@Component({
  selector: 'app-listpayment',
  templateUrl: './listpayment.component.html',
  
  styleUrls: ['./listpayment.component.css']
  
})
export class ListpaymentComponent implements OnInit {
  
  @Input() settingParentData:string

  @Input() settingParentDropDown:any
  loginForm:FormGroup

  

  ngOnInit(): void {

    this.loginForm = new FormGroup({
       
      'username': new FormControl(null,[Validators.required,
      Validators.minLength(3)]),
      'userprice': new FormControl(null,[Validators.required]),
      'usercardno': new FormControl(null,[Validators.required,
      Validators.minLength(16)])
    

    });

  }
 get usernamectrl(){
   return this.loginForm.get("username");
 }
 
 get userpricectrl(){
   return this.loginForm.get("userprice")
 }

 get usercardnum(){
   return this.loginForm.get("usercardno")
 }


  paymentInfo: any []= [];

  showDiv: boolean = true
  fName: any
  Price: any
  cardnumber: any
  output: any
  PaymentInfoObj:string ="";
  cardnum:number;
  dropdownOutput:any
  index:any;
  check:any
  delete:any
  dropDownSelect:any="name"
  Names:any
  subpassangername:any
  age:any
  constructor(public ps2: PaymentdataService) {
    this.paymentInfo = this.ps2.addData()

  }
     


  updateBtn() {

    this.output = "Updated Succesfully"
      
    this.ps2.upDateButton(this.fName,this.Price,this.cardnumber,this.index)
    console.log(this.loginForm.value)
    this.showDiv = true;
    setTimeout(() => {
      this.output="";
     }, 3000);

  }

  editBtn(i:any,name: any, price: any, cardno: any) {
    this.showDiv = false
   this.index = i;
  //  this.fName = name;
  //  this.Price = price;
  //  this.cardnumber = cardno;  

   this.loginForm.patchValue({
     'username': this.fName = name,
     'userprice': this.Price = price,
     'usercardno':this.cardnumber = cardno
   })
     
   this.loginForm.value.Names = name
    
  }

  deleteBtn(i: any) {

    this.delete =i
    this.output = "Deleted Succesfully"
    this.ps2.deleteButton(this.delete)
    setTimeout(() => {
      this.output="";
     }, 3000)
  }
 
  

}
