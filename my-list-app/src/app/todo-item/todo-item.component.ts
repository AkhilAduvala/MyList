import { Component, EventEmitter, Input, Output, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: '[app-todo-item]',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})

export class TodoItemComponent implements OnChanges, OnDestroy{
  @Input() toDo !: ToDo;

  @Output() deleteToDo = new EventEmitter<number>();

  onDelete(){
    alert('Delete clicked!');
    console.log(`we are trying to delete item`);
    this.deleteToDo.emit(this.toDo.id);
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("Changes detected ", changes['toDo']);
  }

  ngOnDestroy(): void {
      console.log(`ToDo with id ${this.toDo.id} is being destroyed`);
  }
}
