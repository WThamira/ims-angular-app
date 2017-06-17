import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  myval = false;

  show() {
    if (this.myval) {
      this.myval = false;
    } else {
      this.myval = true;
    }
  };

  outevent() {
    if (this.myval) {
      this.myval = false;
    } else {
      this.myval = true;
    }

  };

  myclick(){
    console.log('clicked')
  };
}
