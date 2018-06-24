import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pageData = {
  		"h1title": "Table"
  	};

  // peopleData;
  
  constructor(private people: PeopleService) { }

  ngOnInit() {
	this.peopleData = this.people.getPeople();

  }

// Dummy content. It will be replaced soon by feed from a file (people.json)
  
}
