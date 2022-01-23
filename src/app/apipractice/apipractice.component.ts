import { Component, OnInit } from '@angular/core';
import { FormingService } from '../forming.service';

@Component({
  selector: 'app-apipractice',
  templateUrl: './apipractice.component.html',
  styleUrls: ['./apipractice.component.css']
})
export class ApipracticeComponent implements OnInit {


  channels:any

  constructor(public api: FormingService) { }

  ngOnInit(): void {


   this.api.getYoutubeApi().subscribe((data:any)=>{

    this.channels = data.items

    console.log(this.channels)

   })
    

  }

  getChannelInfo(channelName:any){

    // this.api.getYoutubeApi(channelName).subscribe((data:any)=>{

    //   console.log(data)
    // })

  }
}
