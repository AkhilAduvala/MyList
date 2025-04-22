import { Component } from '@angular/core';

type ToDo = {
  id: number
  title: string
  status: "Yet To Start" | "In Progress" | "Completed"
}

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})

export class TodoComponent {

  toDoQueue: ToDo[] = [
    {id: 1, title: "Morning Code", status: "Completed"},
    {id: 2, title: "Brunch Learning", status: "In Progress"},
    {id: 3, title: "Lunch Code", status: "Yet To Start"},
    {id: 4, title: "Evening Learning", status: "Yet To Start"},
    {id: 5, title: "Dinner Code", status: "Yet To Start"},
    {id: 6, title: "Night Learning", status: "Yet To Start"}
  ];
}

