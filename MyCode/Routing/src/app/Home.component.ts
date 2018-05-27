import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs/Rx';

@Component({
  selector: 'app-first',
  template: `
    <p>
      Home Works!
    </p>
    {{para}}
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription:Subscription;
  para:string;

  constructor(private route:ActivatedRoute) {
    this.subscription=route.queryParams.subscribe(
      (queryParams:any) => this.para=queryParams['analytics']
    );

    
   }


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}