import { Directive } from "@angular/core";
import { MyGreetingDirective } from "./my-greeting.directive";

@Directive({
  selector: "[myFormalGreeting]"
})
export class MyFormalGreetingDirective extends MyGreetingDirective {
  constructor(){
    super();
  }
  getGreeting() {
    return "Good Evening";
  }
}
