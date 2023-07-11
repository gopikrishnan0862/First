import { Component } from '@angular/core';
import { CountService } from '../count.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  showUsersList = false;
  usersList: any[] = [];

  constructor(public count: CountService) {}

  getAllUsers() {
    this.showUsersList = true;
    this.usersList = this.count.getUsers();
  }
}

