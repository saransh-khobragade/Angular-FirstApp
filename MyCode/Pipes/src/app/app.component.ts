import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'saransh';
  mydate=new Date(2016,5,15);
  collection=['milk','bread','honey','water','milk2','bonss'];

  asyncValue=new Promise((resolve,reject) =>{
    setTimeout(()=>resolve('data came back'),2000)
  });
}
