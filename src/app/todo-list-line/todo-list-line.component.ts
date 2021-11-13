import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-line',
  templateUrl: './todo-list-line.component.html',
  styleUrls: ['./todo-list-line.component.css']
})
export class TodoListLineComponent implements OnInit {
  @Input() task: string = "";

  @Output() taskRemoved = new EventEmitter();

  words: string[] = ["gambiarrento", "boçal", " john armless"];

  constructor() { }

  ngOnInit(): void {
  }

  remove(): void {
    this.taskRemoved.emit(this.task);
  }

  verifyDirtyWords() {
    return this.words.some(word => this.task.includes(word));
  }

}