import { ApiService } from './../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  task: Task = new Task("", "", "");

  constructor(private route: ActivatedRoute, private apiService: ApiService) { 
    const taskId = this.route.snapshot.params["id"];
    this.apiService.getTask(taskId).subscribe(
      task => this.task = task
    );
  }

  ngOnInit(): void {
    

  }

}
