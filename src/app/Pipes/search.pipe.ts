import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
  
})
export class SearchPipe implements PipeTransform {

  transform(value : any[], settingParentData : string,settingParentDropDown:string ): any[] {
    
      if(settingParentData ==="" ){
        return value
      }
      var users :any[]=[]
      console.log(users)
      for(var i=0; i<value.length; i++){

             
        if(settingParentDropDown== "name")
        {
         if(value[i][settingParentDropDown].toLocaleLowerCase().includes(settingParentData.toLocaleLowerCase())){
          users.push(value[i])
         }
        }
       else if(settingParentDropDown == "price"){
       if( value[i][settingParentDropDown].toString() == settingParentData){
        users.push(value[i])
       }       
       }else if(settingParentDropDown =="cardno"){
        if( value[i][settingParentDropDown].toString().includes(settingParentData)){
          users.push(value[i])
        }
       }
        
          
      }
      
      return users; 
  }
    }
  