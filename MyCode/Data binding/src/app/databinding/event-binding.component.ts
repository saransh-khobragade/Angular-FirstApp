import { Component, OnInit, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onclick()">Clickme</button>
    <button (click)="click()">Custom Event</button>
  `,
  styles: []
})
export class EventBindingComponent{
    onclick()
    {
      alert("event binding works");
    }

    @Output() Cust = new EventEmitter();
    click()
    {
      this.Cust.emit("Custom event worked");
    }

 
}
