import { Component, OnDestroy } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-first',
  template: `
    <p>
      para Works!
    </p>
    {{id}}
  `,
  styles: []
})
export class ParaComponent implements OnDestroy {
  id:string;
  private subscription:Subscription;

  constructor(activatedRoute:ActivatedRoute) { 
    this.subscription=activatedRoute.params.subscribe(
      (param:any) => this.id=param['id']
    );
    
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  

}