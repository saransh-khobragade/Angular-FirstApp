import { Directive ,ElementRef,Renderer,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseinsde(){
    this.backgroundColor=this.highlightColor;
  };
  @HostListener('mouseleave') mouseoutside(){
    this.backgroundColor=this.defaultColor;;
  };
  @HostBinding('style.backgroundColor') get color(){
    return this.backgroundColor;
  }

  @Input() defaultColor ='grey';
  @Input('highlight') highlightColor ='green';

  private backgroundColor=this.defaultColor;
  
  constructor(private elementRef:ElementRef,private renderer: Renderer){
    //this.elementRef.nativeElement.style.background='blue';
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','blue');
 }

}
