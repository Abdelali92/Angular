import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { Todo } from "../models/todo.models";
import { TodoService } from "../services/todo.service";

@Component({

  selector: 'my-todo',
  templateUrl:'./todo.component.html',
  styleUrls: ['./todo.component.css']


})

export class TodoComponent implements OnInit, OnDestroy {

  today;
  todos;
  todoSub : Subscription;

  constructor(private todoservice: TodoService, private router : Router){


  }

  ngOnInit(){

    this.today = this.todoservice.today;
    this.todoSub = this.todoservice.todoSubject.subscribe(
      (value : any[]) => {
        this.todos = value;
      },
      (erreur) => {
        console.log("Erreur"+erreur);

      },
      () => {console.log("Observable complété");}


    );

    this.todoservice.emitTodos();

  }

  onChangeStatus(i : number) {

    this.todoservice.onChangeStatus(i);


  }

  onChangeIsModif(i: number){

    this.todoservice.onChangeIsModif(i);



  }

  onView(id: number) {

    this.router.navigate(["single-todo",id]);

  }

  ngOnDestroy(){
    this.todoSub.unsubscribe();
  }

}
