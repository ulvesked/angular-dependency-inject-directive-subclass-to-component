import { Component, Host, Input, Optional } from '@angular/core';
import { MyFormalGreetingDirective } from './directives/my-formal-greeting.directive';
import { MyGreetingDirective } from './directives/my-greeting.directive';
import { MyInformalGreetingDirective } from './directives/my-informal-greeting.directive';

@Component({
  selector: 'hello',
  template: `<h1>{{greeting}} {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  @Input() name: string;
  get greeting() {
    return this.greetingDirective?.getGreeting();
  }
  constructor(
    @Optional() @Host() private greetingDirective: MyGreetingDirective
  ) {
  }
}
