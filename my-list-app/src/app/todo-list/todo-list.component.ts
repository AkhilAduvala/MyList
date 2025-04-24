import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent implements OnInit{

  toDoQueue: ToDo[] = [];
  newToDo: string = "";

  constructor(private todoService: TodoService){};

  ngOnInit(): void {
      console.log("Welcome! Set, Track and Grow");
      //implement below when learning service -> delegate the logic to handle data to service
      this.toDoQueue = this.todoService.getToDos();
  }

  addNewToDo(newToDo: string): void{
    this.todoService.addToDo(newToDo);
    this.toDoQueue = this.todoService.getToDos();
    this.newToDo = ""; //so the input will be cleared once the new todo is added to queue
  }

  handleDelete(id: number): void{
    console.log(`we are removing the selected item with id : ${id} from queue`);
    this.todoService.deleteToDO(id);
    this.toDoQueue = this.todoService.getToDos();
  }

  markAsComplete(id: number): void {
    this.todoService.markAsCompleted(id);
    this.toDoQueue = this.todoService.getToDos();
    console.log('Updated ToDo List:', this.toDoQueue);
  }

}
