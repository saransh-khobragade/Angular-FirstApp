import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service'
import {TalkService} from './talk.service';


@Component({
  selector: 'app-component-b',
  template: `
  <div>
      <input type="text" #input>
      <button (click)="onLog(input.value)">Log</button>
      <ul>
        <li *ngFor="let item of items">{{item}}</li>
      </ul>

      <p>{{value}}</p>
    </div>
  `,
  styles: [],
  providers:[DataService]
})
export class ComponentBComponent implements OnInit{

  value=''; 
  items:string[]=[];
  constructor(private Da:DataService,private talk:TalkService) { }

  onLog(value:string){
    this.Da.writeTolog(value);
    this.items=this.Da.Get();
  }

 ngOnInit(){
   this.talk.pushedData.subscribe(
     data=>this.value=data 
   );
 }

}
