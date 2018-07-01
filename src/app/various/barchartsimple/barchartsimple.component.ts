import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';


@Component({
  selector: 'app-barchartsimple',
  templateUrl: './barchartsimple.component.html',
  styleUrls: ['./barchartsimple.component.css']
})
export class BarchartsimpleComponent implements OnInit {

  constructor(private people: PeopleService) {
  }

  ngOnInit() {
  	this.peopleData = this.people.getPeople();

  	var sum1 = 0; // for storing balance from people with age smaller than 20
  	var sum2 = 0; // for storing balance from people with age from 20 to 29
  	var sum3 = 0; // for storing balance from people with age from 30 to 39
  	var sum4 = 0; // for storing balance from people with age from 40 to 49
  	var sum5 = 0; // for storing balance from people with age 50 or above

	for (let index in this.peopleData) {
  		if (this.peopleData[index].age < 20) { sum1 = sum1 + this.peopleData[index].balance }
  		if (this.peopleData[index].age >= 20 && this.peopleData[index].age < 29) { sum2 = sum2 + this.peopleData[index].balance }
		if (this.peopleData[index].age >= 30 && this.peopleData[index].age < 39) { sum3 = sum3 + this.peopleData[index].balance }
		if (this.peopleData[index].age >= 40 && this.peopleData[index].age < 49) { sum4 = sum4 + this.peopleData[index].balance }
		if (this.peopleData[index].age >= 50) { sum5 = sum5 + this.peopleData[index].balance }
		console.log(this.peopleData[index].balance);
  	}

	google.charts.load('current', {packages: ['corechart', 'bar']});
	google.charts.setOnLoadCallback(drawBasic);

	function drawBasic() {

	      var data = google.visualization.arrayToDataTable([
	        ['Age', 'Total Revenue',],
			['< 20',     sum1],
			['20 to 30',      sum2],
			['30 to 40',  sum3],
			['40 to 50', sum4],
			['> 50',    sum5]
	      ]);

	      var options = {
	        title: 'Revenue by age range',
	        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
	        chartArea: {width: '50%'},
	        hAxis: {
	          title: 'Total Revenue',
	          minValue: 0
	        },
	        vAxis: {
	          title: 'Age'
	        }
	      };

	      var chart = new google.visualization.BarChart(document.getElementById('barchart'));

	      chart.draw(data, options);
	    }
  }

}
