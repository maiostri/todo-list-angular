import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './model/task';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Uma chamada HTTP retorna um status code.
  // 1xx ~ 5xx
  // 2xx -> retornos com sucesso
  // 3xx -> vinculados a redirecionamentos
  // 4xx -> Erros no lado do cliente
  // 5xx -> Erros no lado do servidor.

  // Injetando o client http.
  constructor(private httpClient: HttpClient) { }

  // GET ALL Tasks - http://localhost:3001/tasks
  // Status: 200 - OK
  listTasks() {
    this.httpClient.options
    return this.httpClient.get<Task[]>(
      'http://localhost:3001/tasks'
    )
  }

  // GET - http://localhost:3001/tasks/:id
  // Status: 200 - OK
  getTask(id: string) {
    return this.httpClient.get<Task>(
      `http://localhost:3001/tasks/${id}`
    )
  }

  // POST - http://localhost:3001/tasks
  // Status: 201 - CREATED
  addTask(task: Task) {
    // Enviamos o JSON da task no corpo do request.
    return this.httpClient.post<Task>(
      'http://localhost:3002/tasks',
      task
    );
  }

  // DELETE - http://localhost:3001/tasks/:id
  // Status: 204 - No content, 200 - OK
  deleteTask(id: string) {
    return this.httpClient.delete<Task>(
      `http://localhost:3001/tasks/${id}`
    )
  }

  // PUT - http://localhost:3001/tasks/:id
  // Status: 200 - OK
  updateTask(task: Task) {
    return this.httpClient.put<Task>(
      `http://localhost:3001/tasks/${task.id}`,
      task
    )
  }

  // ? => especifica query params. -> no formato chave e valor.
  // text=test
  // Exemplo maior: search?text=teste&owner=ricardo..
  // GET - http://localhost:3001/tasks/search?text=
  searchTask(text: string) {

  }

}
