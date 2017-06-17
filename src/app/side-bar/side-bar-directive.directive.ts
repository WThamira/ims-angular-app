import { element } from 'protractor';
import { Directive, HostListener, HostBinding, ElementRef, ViewChild } from '@angular/core';

@Directive({
  selector: '[appSideBarDirective]'
})
export class SideBarDirectiveDirective {
  @HostListener('mouseenter') mouseEnterThis(){

    this.element.nativeElement.style.color='red';

  }
  
  constructor(@ViewChild('myid')private element:ElementRef){

  }
  
  private display=false;



}
