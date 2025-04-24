import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
//import { TodoListComponent } from './todo-list/todo-list.component'; // needed only if eager loading

export const routes: Routes = [
    //{ path: 'todos', component: TodoListComponent}, //eager loading

    {
        path: 'todos',
        loadComponent: () => import('./todo-list/todo-list.component').then(m => m.TodoListComponent)
    },
    {
        path: 'todos/:id',
        loadComponent: () => import('./todo-detail/todo-detail.component').then(m => m.TodoDetailComponent)
    },
    {
        path: 'admin',
        loadComponent: () => import('./admin/admin.component').then(m => m.AdminComponent),
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'todos',
        pathMatch: 'full'
    }
];
