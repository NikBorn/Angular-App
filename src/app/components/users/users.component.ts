import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
          registered: new Date('01/02/2018 08:30:00')
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
          registered: new Date('02/14/2018 06:20:00')
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
          registered: new Date('11/02/2016 10:30:00')
        }
      ];
    this.loaded = true;

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
