import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListWrapperComponent } from './todo-list-wrapper/todo-list-wrapper.component';
import { TodoListLineComponent } from './todo-list-line/todo-list-line.component';
import { FormsModule } from '@angular/forms';
import { DirtywordsDirective } from './dirtywords.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoListWrapperComponent,
    TodoListLineComponent,
    DirtywordsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
