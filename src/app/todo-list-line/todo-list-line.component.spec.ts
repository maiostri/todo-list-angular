import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListLineComponent } from './todo-list-line.component';

describe('TodoListLineComponent', () => {
  let component: TodoListLineComponent;
  let fixture: ComponentFixture<TodoListLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
