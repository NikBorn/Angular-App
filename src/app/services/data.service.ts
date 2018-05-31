import { Injectable } from '@angular/core';
import { User } from '../models/User'

@Injectable()
export class DataService {
  users: User[];

  constructor() { 
    this.users = [
      {
        firstName: 'Tyler',
        lastName: 'Durden',
        email: 'tyler@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Brad',
        lastName: 'Pitt',
        email: 'brad@gmail.com',
        isActive: false,
        registered: new Date('02/14/2018 06:20:00'),
        hide: true
      },
      {
        firstName: 'Edward',
        lastName: 'Norton',
        email: 'Eddie@gmail.com',
        isActive: true,
        registered: new Date('11/02/2016 10:30:00'),
        hide: true
      }
    ];
  }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
