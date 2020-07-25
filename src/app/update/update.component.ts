import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
  providers: [UserService]
})
export class UpdateComponent implements OnInit {
  users = [];
  selectedUser;

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.UserService.getUsers().then(res => this.users = res); 
    //this.users = this.UserService.getUsers();
  }

  selectUser(user){
    this.selectedUser = user;
  }

  updateUser(user){
    this.selectedUser = null;
    this.UserService.updateUser(user)
      .then(() => this.getUsers());
    console.log("user updated");
  }

}
