import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {

  private data :string[]=[];
  


  Add(input:string)
  {
    this.data.push(input);
  }

  Get(){
    return this.data;
  }

  constructor(private da:LogService){} 

  writeTolog(logMessage:string){
    this.da.writeTolog(logMessage);
  }
  
  
 
}
