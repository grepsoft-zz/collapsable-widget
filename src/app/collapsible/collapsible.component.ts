import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit {

  @Input() bodyRef : TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}