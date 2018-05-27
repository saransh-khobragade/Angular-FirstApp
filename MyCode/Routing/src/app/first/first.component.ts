import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
    <p>
      first Works!
    </p>
    <a [routerLink]="['../']">Home</a>
  `,
  styles: []
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}