import {Injectable} from '@angular/core';
import { Http,Headers } from '@angular/http';


export interface Config {
  heroesUrl: string;
  textfile: string;
}


@Injectable()
export class HttpService{
  constructor(private http:Http){}
  config:Config;
  

  getData(){
    return this.http.get('https://angular2-ca32a.firebaseio.com/.json').toPromise()
    .then(response => response.json().data)
    //
  }

  sendata(user:any){
    const body=JSON.stringify(user);
    const header = {  headers: new Headers({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
        })
      };
    return this.http.post('https://angular2-ca32a.firebaseio.com/data.json',body,header);
  }

  getJsonData(){
    return this.http.get('https://angular2-ca32a.firebaseio.com/title.json').toPromise()
    .then(data=>data.json());
  }

   
  
}