import { 
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  ViewChild,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  template:`
  <p>
    lifecycle is working
  </p>
  <p #boundPara>{{bindable}}</p>
  <p>{{boundPara.textContent}}</p>
  `
})
export class LifecycleComponent implements OnChanges,
OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,
AfterViewChecked,OnDestroy
{
  @Input() bindable=100;
  @ViewChild('boundPara') boundPara:HTMLElement;
  @ContentChild('boundContent') boundContent1:HTMLElement;

  constructor() { }

  ngOnChanges(){
    console.log('onchange');
  }
  ngOnInit() {
    console.log('oninit');
  }
  ngDoCheck(){
    console.log('docheck');
  }
  ngAfterContentChecked(){
    console.log('aftercontentcheck');
  }
  ngAfterContentInit(){
    console.log('aftercontentinit');
    console.log(this.boundContent1);
  }
  ngAfterViewInit(){
    console.log('afterviewinit');
    console.log(this.boundPara);
  }
  ngAfterViewChecked(){
    console.log('afterviewchecked');
  }
  ngOnDestroy(){
    console.log('ondestroyed');
  }

}
