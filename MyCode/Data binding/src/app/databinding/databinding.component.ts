import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent{
  stringInterpolation='this is string';
  numberInterpolation=2;

  ontest(){
    return true;
  }

  fire(value:string)
  {
    alert(value);
  }
}
