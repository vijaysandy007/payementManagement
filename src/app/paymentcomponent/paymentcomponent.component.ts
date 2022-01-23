import { style } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { setupTestingRouter } from '@angular/router/testing';
import { PaymentdataService } from '../paymentdata.service';

@Component({
  selector: 'app-paymentcomponent',
  templateUrl: './paymentcomponent.component.html',
  styleUrls: ['./paymentcomponent.component.css']
  
})
export class PaymentcomponentComponent implements OnInit {

  isMobile = window.innerWidth <= 1023

  constructor(public ps1:PaymentdataService) { 
  
    
  }
  
  
  ngOnInit(): void {
  }

  Name:any="";
  Price:any;
  cardNo:any;
  btnDisable:boolean =false;
  output:any="";
  result:any;
  cardOutput:boolean =true;
  visaImg:any ="./assets/visa.png";
  urlMaster:any ="./assets/mastercard.jpg";
  showVisa:boolean=true
  showMaster:boolean =true
  parent:any;
  PaymentInfoObjs:any;
  parentoutput:any;
PaymentInfoObj:string ="";
dropDownSelect:string = "name";
stringpipevisa:any;

 
  addBtn(f:NgForm){

   this.ps1.receiveData(f.value)

   console.log(f.value)

  //  this.Name=f.value.name,this.Price=f.value.price,this.cardNo=f.value.cardno

  //  this.Name.f.value.name; 
  //  this.Price.f.value.price;
  //  this.cardNo.f.value.cardno;
   this.showVisa=true;
   this.showMaster=true;
   this.output="Payment Informartion Added";
   
  var myvar= setTimeout(() => {
    this.output="";
   }, 3000);
     
   console.log(myvar) 
  }  

     
    }
     
     
    
       
          

        
  
  

