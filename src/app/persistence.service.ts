import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  addToLocalStorage(task: string) {
      let list: string[] = JSON.parse(localStorage.getItem("tasks") ?? "[]");
      list.push(task);
      localStorage.setItem("tasks", JSON.stringify(list));
  }

  loadFromLocalStorage(): string[] {
    return JSON.parse(localStorage.getItem("tasks") ?? "[]");
  }

  loadToLocalStorage(tasks: string[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
