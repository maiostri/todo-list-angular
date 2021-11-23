import { ApiService } from './../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  task: Task = new Task('', '', '');

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    const taskId = this.route.snapshot.params['id'];
    this.apiService.getTask(taskId).subscribe((task) => (this.task = task));
  }

  update(inputNome: string, inputTexto:string) {
    const newTask = new Task(this.task.id, inputNome, inputTexto);
    this.apiService.updateTask(newTask).subscribe(
      data => console.log("Atualizando registro.")
    );
  }

  ngOnInit(): void {}
}
