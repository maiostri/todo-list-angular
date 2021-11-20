import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListWrapperComponent } from './todo-list-wrapper/todo-list-wrapper.component';
import { TodoListLineComponent } from './todo-list-line/todo-list-line.component';
import { FormsModule } from '@angular/forms';
import { DirtywordsDirective } from './dirtywords.directive';
import { TodoDetailComponent } from './todo-list-wrapper/todo-detail/todo-detail.component';

const appRoutes: Routes = [
  // Para cada rota, especificamos um componente
  { path: 'home', component: TodoListWrapperComponent },
  // Pagina/Componente dos detalhes da tarefa.
  { path: 'tasks/:id', component: TodoDetailComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    TodoListWrapperComponent,
    TodoListLineComponent,
    DirtywordsDirective,
    TodoDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
