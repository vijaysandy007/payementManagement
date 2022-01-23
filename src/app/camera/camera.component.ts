import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  showCamera:boolean
  
  

  ngOnInit(): void {

    // localStorage.getItem("likeCount")
    // localStorage.getItem("unLikeCount")

    // this.like()
    // this.unLike()

 
  }

  

  

  // onCamera(){
  //   this.showCamera = true
  // }

  // offCamera(){
  //   this.showCamera = false
  // }

  // getValue:any

  // likeCount:any
  // likeButtonCon:boolean;

  // like(){

  //   this.likeCount = 1

  //   localStorage.setItem("likeCount", this.likeCount)

  //   this.likeButtonCon = true
  // }

  // unLike(){

  //   this.likeCount =0

  //   localStorage.setItem("unLikeCount", this.likeCount)
  //   this.likeButtonCon = true
  // }

 

  // myArray = {
  //   aNumber: 5
  // }
 
}
