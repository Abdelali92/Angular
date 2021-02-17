import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: User [] = [];
  usersSub = new Subject<User[]>();

  constructor() { }

  addUser(user : User) : void{

    this.users.push(user);
  }

  emitUsers():void {

    this.usersSub.next(this.users);
    this.emitUsers();
  }
}
