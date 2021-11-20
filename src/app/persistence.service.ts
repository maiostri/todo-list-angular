import { Task } from 'src/app/model/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  addToLocalStorage(task: Task) {
      let list: Task[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");
      list.push(task);
      localStorage.setItem("tasks", JSON.stringify(list));
  }

  loadFromLocalStorage(): Task[] {
    return JSON.parse(localStorage.getItem("tasks") ?? "[]");
  }

  loadToLocalStorage(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  loadTask(id: string) {
    let list: Task[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    return list.find(t => t.id == id) || new Task("", "", "");
  }

  // Retornar as tarefas que tenham o texto passado.
  searchTask(text: string) {
    let list: Task[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");
    return list.filter(t => t.text.includes(text)) || new Task("", "", "");
  }

}
