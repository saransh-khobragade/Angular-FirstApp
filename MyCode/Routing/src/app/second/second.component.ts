import { Component} from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-second',
  template: `
    <p>
      second Works!
    </p>
    <button (click)=onNavigate()>GO Home</button>
  `,
  styles: []
})
export class SecondComponent {

  constructor(private router:Router) { }

  onNavigate(){
    this.router.navigate(['/'],{queryParams:{'analytics':100}})
  }

}