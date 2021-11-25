import { validador } from './../../shared/validators';
import { ApiService } from './../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  task: Task = new Task('', '', '');

  words: string[] = ["boça", "bocó"];

  editTask: FormGroup;

  // ValidatorFN é uma funçao que retorna um [objeto em caso de erro]
  // Ou nulo em caso de sucesso.
  

  validator = (control: AbstractControl): ValidationErrors | null => {
    const forbidden = ["boça", "bocó"].some(w => control.value.includes(w));
      return forbidden ? { palavrasSujas: { value: control.value} } : null;
  }

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    const taskId = this.route.snapshot.params['id'];
    this.apiService.getTask(taskId).subscribe((task) => (this.task = task));

    // Inicializando o formulario.
    // Recebe no construtor um objeto que tenha as mesmas entradas
    // do formulario.

    // Um FormGroup é composto por 1 ou mais FormControls.

    this.editTask = new FormGroup({
      // Estou fazendo o link entre o campo no form, e um atributo
      // no modelo.
      'name': new FormControl(this.task.name,
        // Array de validadores.
        [Validators.required,
        Validators.minLength(3),
        validador(this.words)
      ]
        ),
      'text': new FormControl(this.task.text, 
        // Array de validadores.
        [Validators.required,
        Validators.minLength(3),
        validador(this.words)
      ])
    })
  }

  // this.editTask.get('name') -> FormControl
  // Varias propriedades, dentre elas:
  // value: vai retornar o value
  // valid, invalid, etc.
  get name() { return this.editTask.get('name')}
  get text() { return this.editTask.get('text')}

  // O Form pode estar em 2 estados, valid e invalid.

  submit() {
    // Pegar os dados do form e mandar para a api.
    const name = this.editTask.get('name')?.value;
    const text = this.editTask.get('text')?.value;
    const newTask = new Task(this.task.id, name, text);
    this.apiService.updateTask(newTask).subscribe();
  }

  ngOnInit(): void {}
}
