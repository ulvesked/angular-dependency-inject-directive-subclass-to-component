import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { MyGreetingDirective } from "./directives/my-greeting.directive";
import { MyFormalGreetingDirective } from "./directives/my-formal-greeting.directive";
import { MyInformalGreetingDirective } from "./directives/my-informal-greeting.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MyGreetingDirective,
    MyFormalGreetingDirective,
    MyInformalGreetingDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
