import { Component, Input } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {
  @Input() toDo !: ToDo;
}
