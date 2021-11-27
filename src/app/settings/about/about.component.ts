import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pipe: string = "teste pipe";
  data: Date = new Date();
  valor: number = 599.90;

  constructor() { }

  ngOnInit(): void {
  }

}
