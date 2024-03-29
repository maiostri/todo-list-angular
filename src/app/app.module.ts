import { InternalAboutComponent } from './settings/internal-about/internal-about.component';
import { AboutComponent } from './settings/about/about.component';
import { SettingsModule } from './settings/settings.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListWrapperComponent } from './todo-list-wrapper/todo-list-wrapper.component';
import { TodoListLineComponent } from './todo-list-line/todo-list-line.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirtywordsDirective } from './dirtywords.directive';
import { TodoDetailComponent } from './todo-list-wrapper/todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo-list-wrapper/todo-edit/todo-edit.component';

const appRoutes: Routes = [
  // Para cada rota, especificamos um componente
  { path: 'home', component: TodoListWrapperComponent },
  // Pagina/Componente dos detalhes da tarefa.
  { path: 'tasks/:id', component: TodoDetailComponent },
  { path: 'tasks/edit/:id', component: TodoEditComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  // São os componentes que compoem o módulo.
  declarations: [
    AppComponent,
    TodoListWrapperComponent,
    TodoListLineComponent,
    DirtywordsDirective,
    TodoDetailComponent,
    TodoEditComponent,
  ],
  // São outros módulos que a gente usa nesse módulo.
  //
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    SettingsModule
  ],
  providers: [],
  exports: [DirtywordsDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
