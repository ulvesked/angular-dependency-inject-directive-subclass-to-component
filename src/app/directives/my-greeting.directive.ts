import { Directive } from '@angular/core';

@Directive({
  selector: '[myGreeting]'
})
export class MyGreetingDirective {

  getGreeting(){
    return "Greetings";
  }

}
