import { ApiService } from './../api.service';
import { debounceTime, Subject } from 'rxjs';
import { PersistenceService } from './../persistence.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';
import { v4 as uuidv4 } from 'uuid';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todo-list-wrapper',
  templateUrl: './todo-list-wrapper.component.html',
  styleUrls: ['./todo-list-wrapper.component.css']
})
export class TodoListWrapperComponent implements OnInit {

  // Declaração e inicialização da nossa lista de tarefas.
  public tasks: Task[] = [];

  valorTarefa: string = "";

  message: string = "";

  filter: string = "";

  filterTask: Subject<string> = new Subject<string>();

  constructor(private apiService: ApiService) {
    // Tem esse formato pq é código assicrono.  
    this.apiService.listTasks()
    // Parecido com fazer um ".then()"
    .subscribe(data => this.tasks = data);
  }

  ngOnInit(): void {
    this.filterTask.pipe(debounceTime(1000))
      .subscribe(text =>  {
        console.log(text);
        this.apiService.searchTask(text);
      });
  }

  onFilterChange(newValue: string) {
    this.filterTask.next(newValue);
  }

  // Método para adição da tarefa na propriedade do componente
  add(task: any): void {
    // Aqui adicionamos o valor que está no input na nossa lista.
    const localTask = new Task(uuidv4(), task.value, task.value);
    this.apiService.addTask(localTask).subscribe(
      data => {
        console.log("Inseri um registro.");
        this.tasks.push(localTask);
        this.message = "";
      }
    ,(error: HttpErrorResponse) => {
      console.log(`Erro: ${error.message}`);
      this.message = "Houve um erro ao inserir.";
    });
  }

  tratarRemocao(removida: Task) {
    this.apiService.deleteTask(removida.id).subscribe(
      data => this.tasks = this.tasks.filter(tarefa => tarefa.id != removida.id)
    );
  }

}
