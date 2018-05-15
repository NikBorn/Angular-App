import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: {};
  currentStyles: {};


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
          image: 'https://placeimg.com/600/600/people/1',
          isActive: true
        },
        {
          firstName: 'Brad',
          lastName: 'Pitt',
          age: 34,
          address: {
            street: '200 School St.'
        city: 'Denver',
            state: 'CO'
          },
          image: 'https://placeimg.com/600/600/people/2',
          isActive: false
        },
        {
          firstName: 'Edward',
          lastName: 'Norton',
          age: 27,
          address: {
            street: '10 Soap Ave.'
        city: 'Commerce City',
            state: 'CO'
          },
          image: 'https://placeimg.com/600/600/people/3',
          isActive: true
        }

      ];


    
    this.loaded = true;

  
    // this.addUser(
    //   {
    //     firstName: 'Edward',
    //     lastName: 'Nono',
    // }
    //   );

    this.setCurrentClasses();
    this.setCurrentStyles();
  }

  addUser(user: User) {
    this.users.push(user)
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    }
  }

  setCurrentStyles() {
    this.currentStyles = {
      'padding-top': this.showExtended ? '0' : '40px',
      'font-size': this.showExtended ? '' : '40px'
    }
  }

}
