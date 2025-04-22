import { Component } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {

  toDoQueue: ToDo[] = [
    {id: 1, title: "Morning Code", status: "Completed"},
    {id: 2, title: "Brunch Learning", status: "In Progress"},
    {id: 3, title: "Lunch Code", status: "Yet To Start"},
    {id: 4, title: "Evening Learning", status: "Yet To Start"},
    {id: 5, title: "Dinner Code", status: "Yet To Start"},
    {id: 6, title: "Night Learning", status: "Yet To Start"}
  ];

  handleDelete(id: number){
    console.log(`we are removing the selected item with id : ${id} from queue`);
    this.toDoQueue = this.toDoQueue.filter(item => item.id !== id);
  }
}
