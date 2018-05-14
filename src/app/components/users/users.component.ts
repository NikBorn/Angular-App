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

  constructor() { }

  ngOnInit() {
  

      this.users = [
        {
          firstName: 'Tyler',
          lastName: 'Durden',
          age: 40,
          address: {
            street: '2020 Lawrence St.'
        city: 'Denver',
            state: 'CO'
          }
        },
        {
          firstName: 'Brad',
          lastName: 'Pitt',
          age: 34,
          address: {
            street: '200 School St.'
        city: 'Denver',
            state: 'CO'
          }
        },
        {
          firstName: 'Edward',
          lastName: 'Norton',
          age: 27,
          address: {
            street: '10 Soap Ave.'
        city: 'Commerce City',
            state: 'CO'
          }
        }

      ];


    
    this.loaded = true;

  
    this.addUser(
      {
        firstName: 'Edward',
        lastName: 'Nono',
    }
      );
  }

  addUser(user: User) {
    this.users.push(user)
  }

}
