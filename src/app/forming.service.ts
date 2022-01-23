import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormingService {

  constructor(public http: HttpClient) { }

  formInfo=[{name:"vijay",lastname:"sandy",username:"vijaysandy007",emailid:"vijaysathya454@gmail.com"
,password:"984152"}]

reacvingData(data:any){
  this.formInfo.push({"name":data.name,"lastname":data.lastname,"username":data.username,"emailid":data.emailid,"password":data.password})
}


getYoutubeApi(){


  return this.http.get<any>("https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCskQgVbOp014ZX7lEyC2NPw&maxResults=10&order=date&key=AIzaSyCKTuWkyoppIutxkK4zgUm-KUJvU9DlyjE")

}

getCoronaApi(){

  return this.http.get<any>("https://api.covid19api.com/countries")
}

getCoronaRealTimeData(userData:any){

    return this.http.get<any>("https://api.covid19api.com/total/dayone/country/" + userData)
  
}

}
