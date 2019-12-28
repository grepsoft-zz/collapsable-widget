import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: "app-collapsible",
  styleUrls: ["./collapsible.component.css"],
  template: `
    <div class="wtitle pointer" (click)="toggleBody()">
      <span>
        <fa-icon icon="chevron-right" *ngIf="collapsed"></fa-icon>
        <fa-icon icon="chevron-down" *ngIf="!collapsed"></fa-icon>
        {{title}}
      </span>
    </div>
    <div class="wbody" [@openClose]="!collapsed ? 'open' : 'closed'">
      <ng-template [ngTemplateOutlet]="bodyTemplate"></ng-template>
    </div>
  `,
  animations: [    
    trigger('openClose', [
      // ...
      state('open', style({
        display: 'block',
        opacity: 1
      })),
      state('closed', style({
        display: 'none',
        opacity: 0
      })),
      transition('* => *', [
        animate('0.5s')
      ]),
    ]),]  
})
export class CollapsibleComponent implements OnInit {
  @Input() bodyTemplate: TemplateRef<any>;
  @Input() title : string;

  collapsed: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggleBody() {
    this.collapsed = !this.collapsed;
  }  
}

/*
Copyright Grepsoft. All Rights Reserved.
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or any later version.
*/