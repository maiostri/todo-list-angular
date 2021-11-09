import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListWrapperComponent } from './todo-list-wrapper.component';

describe('TodoListWrapperComponent', () => {
  let component: TodoListWrapperComponent;
  let fixture: ComponentFixture<TodoListWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
