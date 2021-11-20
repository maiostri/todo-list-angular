import { PersistenceService } from './../../persistence.service';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  task: Task;

  constructor(private route: ActivatedRoute, persistenceService: PersistenceService) { 
    const taskId = this.route.snapshot.params["id"];
    this.task = persistenceService.loadTask(taskId);
  }

  ngOnInit(): void {
    

  }

}
