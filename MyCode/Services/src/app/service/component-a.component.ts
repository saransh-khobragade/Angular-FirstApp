import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'
import {TalkService} from './talk.service';

@Component({
  selector: 'app-component-a',
  template: `
    <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <button (click)="onSend(input.value)">Send</button>
      <ul>
      <li *ngFor="let item of items">{{item}}</li>
      </ul>
      
    </div>
  `,
  styles: [],
  providers:[DataService]
})
export class ComponentAComponent {

  items:string[]=[];

  constructor(private Da:DataService,private talk:TalkService) { }

  onLog(value:string){
    this.Da.writeTolog(value);

    this.Da.Add(value);
    this.items=this.Da.Get();
  }

  onSend(value:string)
  {
    this.talk.pushData(value);
    //this.Da.pushData(value);
  }
}
