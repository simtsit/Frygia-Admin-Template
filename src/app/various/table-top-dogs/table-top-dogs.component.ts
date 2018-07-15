import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';

@Component({
  selector: 'app-table-top-dogs',
  templateUrl: './table-top-dogs.component.html',
  styleUrls: ['./table-top-dogs.component.css']
})
export class TableTopDogsComponent implements OnInit {
	peopleData;
	topDogs;

  constructor(private people:PeopleService) { }

  ngOnInit() {
	this.peopleData = this.people.getPeople();
	

	function sortJSON(data, key, way) {
    	return data.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        if (way === '123' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
	        if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
	    });
	}

	this.topDogs = sortJSON(this.peopleData,"balance", "321").slice(0,10); // 123 or 321

  }

}
