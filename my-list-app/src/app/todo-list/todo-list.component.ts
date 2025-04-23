import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../models/todo.model';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent implements OnInit{

  ngOnInit(): void {
      console.log("Welcome! Set, Track and Grow");
      //implement below when learning service
      //this.toDoQueue = this.toDoService.getToDos();
  }

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

  newToDo: string = "";

  addNewToDo(newToDo: string){
    this.toDoQueue.push({id: 7, title: newToDo, status: "Yet To Start"});
    this.newToDo = ""; //so the input will be cleared once the new todo is added to queue
  }
}
