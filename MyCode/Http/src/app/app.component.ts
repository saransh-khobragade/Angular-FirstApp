import { Component ,OnInit} from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
//import { HttpErrorResponse } from '@angular/http';
import { catchError, retry } from 'rxjs/operators';



@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  constructor(private http:HttpService){}

  items=[];
  aynscStr=this.http.getJsonData();

  ngOnInit(){
    this.http.getData().then(data => {
      for(let key in data)
      this.items.push(data[key]);
    });
  }


  error:string;
  onclick(usrname:string,el:string){

    this.http.sendata({username:usrname,email:el}).subscribe(data=>console.log(data));
    
    
  }

  show()
  {
    this.http.getData().then(data => {
      for(let key in data)
      this.items.push(data[key]);
    });
  }

  
  
}
