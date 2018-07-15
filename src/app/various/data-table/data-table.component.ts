import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
	peopleData;
	
  constructor(private people: PeopleService) { }

  ngOnInit() {
	this.peopleData = this.people.getPeople();
  }

}
