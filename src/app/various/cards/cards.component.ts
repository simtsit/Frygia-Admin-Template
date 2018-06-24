import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

	peopleData;
	peopleTotal;
	
	constructor(private people: PeopleService) { }
	ngOnInit() {
		this.peopleData = this.people.getPeople();
		this.peopleTotal = this.peopleData.length;
	}
	

}
