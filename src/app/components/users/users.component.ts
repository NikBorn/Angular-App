import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
    }
  }
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() { }

  ngOnInit() {

      this.users = [
        {
          firstName: 'Tyler',
          lastName: 'Durden',
          age: 40,
          address: {
            street: '2020 Lawrence St.',
            city: 'Denver',
            state: 'CO'
          },
          isActive: true,
          registered: new Date('01/02/2018 08:30:00'),
          hide: true
        },
        {
          firstName: 'Brad',
          lastName: 'Pitt',
          age: 34,
          address: {
            street: '200 School St.',
            city: 'Denver',
            state: 'CO'
          },
          isActive: false,
          registered: new Date('02/14/2018 06:20:00'),
          hide: true
        },
        {
          firstName: 'Edward',
          lastName: 'Norton',
          age: 27,
          address: {
            street: '10 Soap Ave.',
            city: 'Commerce City',
            state: 'CO'
          },
          isActive: true,
          registered: new Date('11/02/2016 10:30:00'),
          hide: true
        }
      ];
    this.loaded = true;

  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();

    // this.users.push(this.user); will add it to the end
    this.users.unshift(this.user); // adds it to the beginning

    this.user = {
      firstName: '',
      lastName: '',
      age: null,
      address: {
        street: '',
        city: '',
        state: ''
      }
    }
    
  }

  toggleHide(user: User) {
    user.hide = !user.hide;
  }

}
