import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: '[app-todo-item]',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent {
  @Input() toDo !: ToDo;

  @Output() deleteToDo = new EventEmitter<number>();

  onDelete(){
    alert('Delete clicked!');
    console.log(`we are trying to delete item`);
    this.deleteToDo.emit(this.toDo.id);
  }
}
