import { Component, ViewChild, Renderer2 } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
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
export class AppComponent {
  @ViewChild("wbody", { static: false })
  body;

  name = "Collapsable Widget";

  collapsed: boolean = false;
  rdr : Renderer2;

  constructor(public renderer: Renderer2) {
    this.rdr = renderer;
  }

  toggleBody() {
    this.collapsed = !this.collapsed;

    // if (this.collapsed) {
    //   this.rdr.addClass(this.body.nativeElement, "hide");
    // } else {
    //   this.rdr.removeClass(this.body.nativeElement, "hide");
    // }

  }
}
