import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormingService } from '../forming.service';

@Component({
  selector: 'app-forming',
  templateUrl: './forming.component.html',
  styleUrls: ['./forming.component.css']
})
export class FormingComponent implements OnInit {

  title="Register"

  constructor(public fb:FormingService) { }



  ngOnInit(): void {
  }


  submitbtn(data:NgForm){

    this.fb.reacvingData(data.value)
   
  
    console.log(data.value)

  }
  clear(data:NgForm){

    data.reset()

  }

}
