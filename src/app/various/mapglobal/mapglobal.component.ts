import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';

@Component({
  selector: 'app-mapglobal',
  templateUrl: './mapglobal.component.html',
  styleUrls: ['./mapglobal.component.css']
})
export class MapglobalComponent implements OnInit {
	  lat: number = 51.678418;
	  lng: number = 7.809007;		

  constructor(private people: PeopleService) { }

  ngOnInit() {
		this.peopleData = this.people.getPeople();
		
  }

}
