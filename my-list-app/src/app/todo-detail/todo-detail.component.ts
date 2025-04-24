import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-detail',
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit{
  todo!: ToDo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todo = this.todoService.getToDoById(id);
  }

}
