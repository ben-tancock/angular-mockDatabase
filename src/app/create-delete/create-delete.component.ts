import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { UserService } from '../user.service';

@Component({
  selector: 'app-create-delete',
  templateUrl: './create-delete.component.html',
  styleUrls: ['./create-delete.component.css']
})
export class CreateDeleteComponent implements OnInit {
  users:any = [];
  selectedUser;
  constructor( private UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.UserService.getUsers().then(users => this.users = users); 
    //this.users = this.UserService.getUsers();
  }

  deleteUser(user){
    this.UserService.deleteUser(user.id).then(() => {
      this.getUsers();
    });
  }

  createUser(userName, email){
    console.log("testing CDC create...");
    this.selectedUser = null;
    
    var idNum = null;
    if(this.users == null){
      idNum = 1;
    }
    else{
      idNum = this.users.length + 1;
    }
    let user = {
      'id': idNum,
      'userName': userName.trim(),
      'email': email.trim()
    };
    if(!user.userName || !user.email){
      return;
    }

    this.UserService.createUser(user).then((res:any) => {
      console.log("pushing to user...");
      this.users.push(user);
    })
  }
}
