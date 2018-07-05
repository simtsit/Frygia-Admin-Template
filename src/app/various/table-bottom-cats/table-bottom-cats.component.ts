import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';

@Component({
  selector: 'app-table-bottom-cats',
  templateUrl: './table-bottom-cats.component.html',
  styleUrls: ['./table-bottom-cats.component.css']
})
export class TableBottomCatsComponent implements OnInit {
  
  constructor(private people:PeopleService) { }

  ngOnInit() {
	this.peopleData = this.people.getPeople();
	
	var topdogs;

	function sortJSON(data, key, way) {
    	return data.sort(function(a, b) {
	        var x = a[key]; var y = b[key];
	        if (way === '123' ) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
	        if (way === '321') { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
	    });
	}

	this.bottomCats = sortJSON(this.peopleData,"balance", "123").slice(0,10); // 123 or 321

  }

}