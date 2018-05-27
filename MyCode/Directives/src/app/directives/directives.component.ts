import { Component,Directive } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: [ './directives.component.css' ]
})
export class DirectivesComponent  {
  name = 'Angular 5';
 
 private toggle:boolean=true;
 private items=[1,2,3,4,5];
 private value=20;

 onselect()
 {
   this.toggle=!this.toggle;
 }
 
}
