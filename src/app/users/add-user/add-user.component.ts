import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/adress.models';
import { User } from 'src/app/models/user.models';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private userService: UsersService, private router : Router) { }

  ngOnInit(): void {
    this.initUserForm();
  }

  initUserForm(){
    this.userForm = this.formbuilder.group({

      firstname: this.formbuilder.control("", [Validators.required, Validators.minLength(5)]),
      lastname: this.formbuilder.control("", [Validators.required, Validators.minLength(5)]),
      email: this.formbuilder.control("",[Validators.required, Validators.email, Validators.minLength(5)]),
      description: this.formbuilder.control("", [Validators.required, Validators.minLength(15)]),
      dateBirth: this.formbuilder.control("", Validators.required),
      address: this.formbuilder.group({
        street:this.formbuilder.control("", Validators.required),
        city:this.formbuilder.control("", Validators.required),
        state:this.formbuilder.control("", Validators.required),
        zip:this.formbuilder.control("", Validators.required),
      }),

    });
  }

  onSubmit():void {

    const dataUser = this.userForm.value;
    const adress = new Address(dataUser.street, dataUser.city, dataUser.state, dataUser.zip)
    const newUser = new User(dataUser.firstname, dataUser.lastname, dataUser.email, adress,
                              dataUser.description,  dataUser.dateBirth);

    this.userService.addUser(newUser);
    this.router.navigate(["users"]);
    //console.log(this.userForm.value);

  }

}
