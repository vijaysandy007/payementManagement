import { Component, OnInit } from '@angular/core';
import { FormingService } from '../forming.service';

@Component({
  selector: 'app-coronaapi',
  templateUrl: './coronaapi.component.html',
  styleUrls: ['./coronaapi.component.css']
})
export class CoronaapiComponent implements OnInit {

  apiData:any

  conformed:any

  recoverd:any

  death:any

  showData:boolean = false;

  countryName:any

  countries:any 
  constructor(public api:FormingService) { }

  ngOnInit(): void {

    this.api.getCoronaApi().subscribe((data:any)=>{

      console.log(data)

      this.apiData = data
    })

  }

  getCountry(event:any){

    this.countries = event.target.value;

  }


  getCoronaData(){

    this.api.getCoronaRealTimeData(this.countries).subscribe((data:any)=>{

      if(this.countries){

        this.showData = true
        
        console.log(data)

        var index = data.length -1
    
        this.conformed = data[index].Confirmed
    
        this.recoverd = data[index].Recovered
    
        this.death = data[index].Deaths
  
   this.countryName = data[index].Country
        
      }
     
    })
   
  }

}
