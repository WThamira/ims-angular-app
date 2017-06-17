import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MdSidenavModule,MdSidenav,MdListModule } from '@angular/material';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SideBarDirectiveDirective } from './side-bar/side-bar-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    SideBarDirectiveDirective
  ],
  imports: [

    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdSidenavModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
