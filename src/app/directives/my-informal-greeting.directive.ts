import { Directive, Host, OnInit, Optional, Self } from "@angular/core";
import { MyGreetingDirective } from "./my-greeting.directive";

@Directive({
  selector: "[myInformalGreeting]"
})
export class MyInformalGreetingDirective extends MyGreetingDirective {
  constructor(){
    super();
  }
  getGreeting() {
    return "Hi";
  }
}
