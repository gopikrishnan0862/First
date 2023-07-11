import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private clickCount = 0;
  private users: any[] = [];

  increment() {
    this.clickCount++;
  }

  addUser(user: { 
    firstName: string; 
    lastName: string; 
    email: string }) 
    {
    this.users.push(user);
  }

  getCount() {
    return this.clickCount;
  }

  getUsers() {
    return this.users;
  }
}