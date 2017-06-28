import { element } from 'protractor';
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appSideBarDirective]'
})
export class SideBarDirectiveDirective {
  // @HostListener('mouseenter') mouseEnterThis() {
  //   // document.getElementsByClassName('list_css1')["1"].style.display='block';
  //   // console.log(document.getElementsByClassName('list_css1'));
  //   let elements: NodeListOf<Element> = document.getElementsByClassName('list_css1');
  //   Array.prototype.forEach.call(elements, e => {
  //     e.style.display = 'block';
  //   });
  // }

  @HostListener('click') mouseLeaveThis() {

    let elements: NodeListOf<Element> = document.getElementsByClassName('list_css1');
    Array.prototype.forEach.call(elements, e => {
      if(e.style.display != 'none'){
        e.style.display = 'none';
      }else{
        e.style.display = 'block';
      }
    });
  }

 


}




