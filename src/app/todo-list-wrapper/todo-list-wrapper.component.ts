import { debounceTime, Subject } from 'rxjs';
import { PersistenceService } from './../persistence.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-todo-list-wrapper',
  templateUrl: './todo-list-wrapper.component.html',
  styleUrls: ['./todo-list-wrapper.component.css']
})
export class TodoListWrapperComponent implements OnInit {

  // Declaração e inicialização da nossa lista de tarefas.
  public tasks: Task[] = [];

  valorTarefa: string = "";

  filter: string = "";

  filterTask: Subject<string> = new Subject<string>();

  constructor(private persistenceService: PersistenceService) {
      this.tasks = this.persistenceService.loadFromLocalStorage();
  }

  ngOnInit(): void {
    this.filterTask.pipe(debounceTime(1000))
      .subscribe(text =>  {
        console.log(text);
        this.tasks = this.persistenceService.searchTask(text);
      });
  }

  onFilterChange(newValue: string) {
    this.filterTask.next(newValue);
  }

  // Método para adição da tarefa na propriedade do componente
  add(task: any): void {
    // Aqui adicionamos o valor que está no input na nossa lista.
    const localTask = new Task(uuidv4(), task.value, task.value);
    this.tasks.push(localTask);
    this.persistenceService.addToLocalStorage(localTask);
  }

  tratarRemocao(removida: any) {
    this.tasks = this.tasks.filter(tarefa => tarefa != removida);
    this.persistenceService.loadToLocalStorage(this.tasks);
  }

}
