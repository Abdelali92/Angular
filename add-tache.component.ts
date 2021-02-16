import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.models';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent implements OnInit {

  todo = new Todo();

  constructor(private todoService : TodoService , private router :Router) { }

  ngOnInit(): void {
  }

  onSubmit():void {

    this.todoService.saveDataTodo(this.todo);
    this.router.navigate(["todo"]);
  }

}
