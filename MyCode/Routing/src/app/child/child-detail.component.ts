import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-detail',
  template: `
    <p>
      child-detail Works!
    </p>
  `,
  styles: []
})
export class ChildDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
