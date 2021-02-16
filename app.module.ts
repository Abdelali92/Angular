import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from "./todo/todo.component";
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from "@angular/router";
import { AddTacheComponent } from './todo/add-tache/add-tache.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';



export const ROUTES : Routes = [
  { path : 'home', component : TodoComponent },

  { path : 'todo', component : TodoComponent },

  { path : 'contact', component : ContactComponent },

  { path : 'add-tache', component : AddTacheComponent },

  { path : 'users', component : UsersComponent },
  { path : 'add-user', component : AddUserComponent },

  { path: 'single-todo/:id', component: SingleTodoComponent },

  { path: '', component : TodoComponent },

  { path : 'not-found', component : NotFoundComponent },

  { path : '**', pathMatch:'full', redirectTo:'not-found'},




];

@NgModule ({

declarations: [
  AppComponent,
  TodoComponent,
  HeaderComponent,
  HomeComponent,
  NotFoundComponent,
  SingleTodoComponent,
  ContactComponent,
  AddTacheComponent,
  UsersComponent,
  AddUserComponent,

],
imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  RouterModule.forRoot(ROUTES),
],

bootstrap: [AppComponent]
})

export class AppModule { }
