import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  title = 'Dynamically Add and Remove Input Field using FormBuilder and FormArray';
 
  passangerForm: FormGroup;

  propertyForm: FormGroup;
 
  constructor(private fb:FormBuilder) {}

  
  ngOnInit(){
   
    this.passangerForm = this.fb.group({
     
      passangerArray: this.fb.array([
      
      ])
    })
    this.testMethod()
    this.addPassangers()

  }



  newProperty(): FormGroup {

    return this.fb.group({
      "subPassanger": new FormControl(this.defaulutPassanger, [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
      "subAge": new FormControl(this.defaultAge,[Validators.required, Validators.minLength(2), Validators.maxLength(10)]),

    })
  }


  get passangerArray(): FormArray {

    return this.passangerForm.get("passangerArray") as FormArray;
  }


  
  myArray:any = [{
    name: "karthik",
    age: 25
  }]
 

  defaulutPassanger:any
  defaultAge:any

  clearBtn(){
  this.defaulutPassanger = undefined
  this.defaultAge = undefined
   
  }

  addPassangers() {
    this.passangerArray.push(this.newProperty());
    
   this.clearBtn()
  }

  testMethod(){
    this.myArray.forEach((element:any) => {
      
      this.defaulutPassanger = element.name
      this.defaultAge = element.age
  });

  
  }

  onSubmit() {

    console.log(this.passangerForm.value)

  }
  removePassanger(i:any){

    this.passangerArray.removeAt(i)
  }

  }
