import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo.models';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  today= new Date;
  todos : Todo[];
  todoSubject = new Subject<Todo[]>();

  constructor(private httpClient : HttpClient) {

    this.getTodoFromServer();
    /*
    setTimeout(() => {
      this.todos=[{
        name : "Projet 1",
        status: true,
        image :"http://placeimg.com/300/300/tech",
        description : "Description du projet 1",
        isModif: false
      },

      {
        name : "Projet 2",
        status: false,
        image :"http://placeimg.com/300/300/tech",
        description : "Description du projet 2",
        isModif: false
      },

      {
        name : "Projet 3",
        status: false,
        image :"http://placeimg.com/300/300/tech",
        description : "Description du projet 3",
        isModif: false
      },

      {
        name : "Projet 4",
        status: true,
        image :"http://placeimg.com/300/300/tech",
        description : "Description du projet 1",
        isModif: false
      },];

      this.emitTodos();

    },1000);
    */

  }





  emitTodos(): void{
    this.todoSubject.next(this.todos);

  }
  onChangeStatus(i : number) {

    this.todos[i].status = !this.todos[i].status;
    this.emitTodos();
    this.saveTodosFromServer();

  }

  onChangeIsModif(i: number){

    this.todos[i].isModif=!this.todos[i].isModif;
    this.emitTodos();
    this.saveTodosFromServer();
  }

  getTodo(index : number) {

    if (this.todos[index]){
      return this.todos[index];
    }
    else
      return false;
  }



 saveDataTodo(todo : Todo): void {

    this.todos.unshift(todo);
    this.emitTodos();
    this.saveTodosFromServer();
  }

  saveTodosFromServer() : void{

    this.httpClient.put("https://todo-list-app-39c01-default-rtdb.firebaseio.com/todos.json",this.todos)
    .subscribe(
      () => { console.log("Données enregistrées avec succès.");
      },
      (erreur) => {console.log("Erreur de sauvegarde : "+erreur);
      }
    );
  }

  getTodoFromServer() : void {

    this.httpClient.get<Todo[]>("https://todo-list-app-39c01-default-rtdb.firebaseio.com/todos.json").subscribe(
      (todoRecup : Todo[]) => {
        this.todos = todoRecup;
       this.emitTodos();
      },
      (erreur) => { console.log("Erreur dans la récupération des données : "+erreur);
      },
      () => {console.log("Les données ont été bien récupérées");
      }
    );
  }

}
