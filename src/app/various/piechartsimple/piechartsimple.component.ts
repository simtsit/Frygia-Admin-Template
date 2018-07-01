import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';

@Component({
  selector: 'app-piechartsimple',
  templateUrl: './piechartsimple.component.html',
  styleUrls: ['./piechartsimple.component.css']
})

export class PiechartsimpleComponent implements OnInit {


  constructor(private people: PeopleService) {
   }

  ngOnInit() {
  	this.peopleData = this.people.getPeople();

  	var group1 = 0; // for storing people with age smaller than 20
  	var group2 = 0; // for storing people with age from 20 to 29
  	var group3 = 0; // for storing people with age from 30 to 39
  	var group4 = 0; // for storing people with age from 40 to 49
  	var group5 = 0; // for storing people with age 50 or above

	for (let index in this.peopleData) {
  		if (this.peopleData[index].age < 20) { group1++}
  		if (this.peopleData[index].age >= 20 && this.peopleData[index].age < 29) { group2++}
		if (this.peopleData[index].age >= 30 && this.peopleData[index].age < 39) { group3++}
		if (this.peopleData[index].age >= 40 && this.peopleData[index].age < 49) { group4++}
		if (this.peopleData[index].age >= 50) { group5++}
  	}

  	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

		function drawChart() {

	var data = google.visualization.arrayToDataTable([
	  ['Age', 'Hours per Day'],
	  ['< 20',     group1],
	  ['20 to 30',      group2],
	  ['30 to 40',  group3],
	  ['40 to 50', group4],
	  ['> 50',    group5]
	]);

	var options = {
		title: 'People per age',
		colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
		is3D: true,
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));

	chart.draw(data, options);

	}
  }

}
