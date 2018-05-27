import { EventEmitter } from '@angular/core';

export class TalkService {

  constructor() { }

  pushedData =new EventEmitter<string>();
  
  pushData(value:string){
    this.pushedData.emit(value);
  }
}
