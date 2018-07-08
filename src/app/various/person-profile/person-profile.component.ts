import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-profile',
  templateUrl: './person-profile.component.html',
  styleUrls: ['./person-profile.component.css']
})
export class PersonProfileComponent implements OnInit {
  pageData = {
  		"h1title": "User Profile"
  	};



personData = {
    "_id": "5b1aef794d24b23d94a3d615",
    "isActive": true,
    "balance": "$1,751.02",
    "picture": "http://placehold.it/32x32",
    "age": 50,
    "eyeColor": "brown",
    "name": {
      "first": "John",
      "last": "Doe"
    },
    "company": "ZINCA",
    "email": "holly.mills@zinca.me",
    "phone": "+1 (814) 556-3134",
    "address": "451 Hornell Loop, Bowmansville, Kansas, 9646",
    "about": "Sint laborum pariatur esse velit nostrud officia qui esse est reprehenderit. Qui nulla qui labore consequat aliquip minim incididunt est dolore consequat. Lorem proident adipisicing cupidatat eiusmod labore nisi. Pariatur dolor tempor dolore enim. Ut veniam laborum aute occaecat aliquip culpa. Culpa exercitation nulla elit pariatur amet consectetur ipsum duis laborum dolor.",
    "registered": "Tuesday, July 18, 2017 10:15 AM",
    "latitude": "-21.720299",
    "longitude": "-134.130595",
    "friends": [
      {
        "id": 0,
        "name": "Myra Terry"
      },
      {
        "id": 1,
        "name": "John Arnold"
      },
      {
        "id": 2,
        "name": "Monica Booker"
      }
    ],
    // "greeting": "Hello, Holly! You have 8 unread messages."
  };

  constructor() { }

  ngOnInit() {
  }

}
