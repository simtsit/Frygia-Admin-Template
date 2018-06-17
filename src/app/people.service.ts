import { Injectable } from '@angular/core';

@Injectable()
export class PeopleService {

  constructor() { }

  getPeople() {
    let people = [
      {
        "_id": "5b1aef794d24b23d94a3d615",
        "index": 0,
        "guid": "bc9196f6-b3a4-478c-8d47-15c2a25c8afe",
        "isActive": true,
        "balance": "$1,751.02",
        "picture": "http://placehold.it/32x32",
        "age": 50,
        "eyeColor": "brown",
        "name": {
          "first": "Holly",
          "last": "Mills"
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
        "greeting": "Hello, Holly! You have 8 unread messages."
      },
      {
        "_id": "5b1aef7911de4a976d113a5c",
        "index": 1,
        "guid": "313679f5-a875-4339-9439-52013148869e",
        "isActive": true,
        "balance": "$3,208.99",
        "picture": "http://placehold.it/32x32",
        "age": 31,
        "eyeColor": "green",
        "name": {
          "first": "Lilian",
          "last": "Wright"
        },
        "company": "HAIRPORT",
        "email": "lilian.wright@hairport.com",
        "phone": "+1 (828) 516-2305",
        "address": "859 Stuyvesant Avenue, Ellerslie, California, 8873",
        "about": "Amet aliquip laboris reprehenderit qui culpa reprehenderit adipisicing est minim duis consequat. Anim adipisicing do minim aliqua adipisicing amet non excepteur pariatur anim ut amet. Consectetur fugiat culpa non consequat elit.",
        "registered": "Thursday, April 13, 2017 11:09 PM",
        "latitude": "38.274437",
        "longitude": "154.79151",
        "friends": [
          {
            "id": 0,
            "name": "Erickson Guerra"
          },
          {
            "id": 1,
            "name": "Gertrude Chambers"
          },
          {
            "id": 2,
            "name": "Michelle Mccoy"
          }
        ],
        "greeting": "Hello, Lilian! You have 7 unread messages."
      },
      {
        "_id": "5b1aef79197bdb2f92d50f1c",
        "index": 2,
        "guid": "9d1279ed-719e-48a8-a290-1e4ab71f05f5",
        "isActive": true,
        "balance": "$2,595.42",
        "picture": "http://placehold.it/32x32",
        "age": 50,
        "eyeColor": "blue",
        "name": {
          "first": "Alyson",
          "last": "Knapp"
        },
        "company": "HELIXO",
        "email": "alyson.knapp@helixo.biz",
        "phone": "+1 (807) 523-2311",
        "address": "819 Vanderveer Street, Albrightsville, New Mexico, 6988",
        "about": "Fugiat consectetur non est ut. Veniam et dolor esse aliqua voluptate culpa laboris veniam quis ullamco et sit. Amet pariatur mollit ex velit ad adipisicing laborum. Aute esse incididunt officia et magna cupidatat reprehenderit elit dolore consequat. Enim occaecat elit eu consectetur esse non aute velit culpa cupidatat consequat nulla aute. Ea minim esse veniam adipisicing amet ut cupidatat ex. Aute nulla ipsum nisi eu aliqua consectetur duis pariatur adipisicing.",
        "registered": "Wednesday, May 31, 2017 7:35 AM",
        "latitude": "-46.572014",
        "longitude": "-77.760881",
        "friends": [
          {
            "id": 0,
            "name": "Chris Bryant"
          },
          {
            "id": 1,
            "name": "Stone Holmes"
          },
          {
            "id": 2,
            "name": "Mabel Weeks"
          }
        ],
        "greeting": "Hello, Alyson! You have 9 unread messages."
      },
      {
        "_id": "5b1aef79e4e61344b29493a0",
        "index": 3,
        "guid": "aea2b95f-13d6-43e9-bb6f-eeebc0c2687b",
        "isActive": true,
        "balance": "$1,979.34",
        "picture": "http://placehold.it/32x32",
        "age": 44,
        "eyeColor": "blue",
        "name": {
          "first": "Mullen",
          "last": "Robbins"
        },
        "company": "GEEKMOSIS",
        "email": "mullen.robbins@geekmosis.tv",
        "phone": "+1 (890) 405-3075",
        "address": "298 Highland Boulevard, Roberts, Palau, 9830",
        "about": "Voluptate officia voluptate qui magna reprehenderit. Magna cupidatat consequat magna eiusmod reprehenderit do quis qui mollit cillum laboris. Ad pariatur sit velit commodo do irure non do qui cillum deserunt. Aliqua dolore proident ad pariatur deserunt excepteur. Sint id cillum dolor velit culpa et aute do nulla est nostrud et adipisicing pariatur. Ex occaecat sit cillum in laborum quis ea. Velit ex ex adipisicing anim id consectetur dolor elit.",
        "registered": "Tuesday, April 3, 2018 6:33 AM",
        "latitude": "-87.326171",
        "longitude": "-27.963176",
        "friends": [
          {
            "id": 0,
            "name": "Lucile Keller"
          },
          {
            "id": 1,
            "name": "Wendi Mosley"
          },
          {
            "id": 2,
            "name": "Teresa Sanders"
          }
        ],
        "greeting": "Hello, Mullen! You have 5 unread messages."
      },
      {
        "_id": "5b1aef791eb2390ca24f2c9b",
        "index": 4,
        "guid": "e565ba3d-06f4-4bb7-8f07-ed567c52f0a7",
        "isActive": false,
        "balance": "$2,532.30",
        "picture": "http://placehold.it/32x32",
        "age": 33,
        "eyeColor": "green",
        "name": {
          "first": "Fern",
          "last": "Maynard"
        },
        "company": "NETERIA",
        "email": "fern.maynard@neteria.info",
        "phone": "+1 (981) 544-2942",
        "address": "563 Matthews Place, Ypsilanti, Louisiana, 7044",
        "about": "Amet nisi in voluptate eu quis occaecat qui. Exercitation ad eu reprehenderit deserunt ad. Nisi Lorem officia in cupidatat ad duis tempor officia laboris non fugiat aliqua culpa in.",
        "registered": "Sunday, September 17, 2017 10:32 PM",
        "latitude": "-61.853203",
        "longitude": "-52.9823",
        "friends": [
          {
            "id": 0,
            "name": "Gray Gay"
          },
          {
            "id": 1,
            "name": "Nettie Hartman"
          },
          {
            "id": 2,
            "name": "Buckner Alford"
          }
        ],
        "greeting": "Hello, Fern! You have 5 unread messages."
      }
    ];
    return people;
  }


}
