import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CollapsibleComponent } from './collapsible/collapsible.component';

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";

import {
  faChevronRight,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";

@NgModule({
  imports:      [ BrowserModule, FormsModule,FontAwesomeModule, BrowserAnimationsModule],
  declarations: [ AppComponent, HelloComponent, CollapsibleComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faChevronRight,
      faChevronDown
    );
  }
 }
