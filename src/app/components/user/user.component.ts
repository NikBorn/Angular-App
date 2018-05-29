import { Component, OnInit } from '@angular/core';

import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  // template: '<h2>John Doe</h2>' //if you want to do inline html
  styleUrls: [ './user.component.css']
  // styles: [`h2{ color: blue}`] //if you want to do inline css
})

export class UserComponent implements OnInit {
  // properties
  user: User;

  // methods
  constructor() {

  }

  ngOnInit() {
    this.user = {
      firstName: 'Tyler',
      lastName: 'Durden',
      email: 'tyler@gmail.com'
    };
  }
}

