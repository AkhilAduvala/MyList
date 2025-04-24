import { Injectable } from '@angular/core';
import { ToDo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  toDoQueue: ToDo[] = [
    {id: 1, title: "Morning Code", status: "Completed"},
    {id: 2, title: "Brunch Learning", status: "In Progress"},
    {id: 3, title: "Lunch Code", status: "Yet To Start"},
    {id: 4, title: "Evening Learning", status: "Yet To Start"},
    {id: 5, title: "Dinner Code", status: "Yet To Start"},
    {id: 6, title: "Night Learning", status: "Yet To Start"}
  ];

  getToDos(): ToDo[] {
    return this.toDoQueue;
  }

  addToDo(task: string): void{
    let newId = this.toDoQueue.length + 1;
    this.toDoQueue.push({id: newId, title: task, status: "Yet To Start"});
  }

  deleteToDO(id: number): void{
    this.toDoQueue = this.toDoQueue.filter(todo => todo.id != id);
  }

  markAsCompleted(id: number): void{

    /*
    mutation without reference change, so it will not reflect on UI

    const todo = this.toDoQueue.find(t => t.id === id);
    if (todo) {
      todo.status = 'Completed'; 
    }
    */

    const todo = this.toDoQueue.find(x => x.id == id);
    if(todo){
      todo.status = "Completed";
    }
  }
}
