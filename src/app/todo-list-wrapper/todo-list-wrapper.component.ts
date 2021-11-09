import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-wrapper',
  templateUrl: './todo-list-wrapper.component.html',
  styleUrls: ['./todo-list-wrapper.component.css']
})
export class TodoListWrapperComponent implements OnInit {

  // Declaração e inicialização da nossa lista de tarefas.
  public tasks: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Método para adição da tarefa na propriedade do componente
  add(task: any): void {
    // Aqui adicionamos o valor que está no input na nossa lista.
    this.tasks.push(task.value);
  }

  tratarRemocao(removida: any) {
    this.tasks = this.tasks.filter(tarefa => tarefa != removida);
  }

}
