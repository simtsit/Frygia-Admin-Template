import { Component, OnInit } from '@angular/core';

import { PeopleService } from './../../people.service';

@Component({
  selector: 'app-various-statistics',
  templateUrl: './various-statistics.component.html',
  styleUrls: ['./various-statistics.component.css']
})
export class VariousStatisticsComponent implements OnInit {
	peopleData;
	
	highestRevenueUser; // for storing the user with highest revenue
	highestRevenue = 0;

	lowestRevenueUser; // for storing the user with lowest revenue
	lowestRevenue = 0;

	totalRevenue: number = 0; // for storing total revenue;
	peopleActive = 0; // for storing how many people have active=true

	totalUsers = 0;

  constructor(private people:PeopleService) { }

  ngOnInit() {

	this.peopleData = this.people.getPeople();


	for (let index in this.peopleData) {
		// finding the highest revenue and it user.
		if (this.peopleData[index].balance > this.highestRevenue) {
			this.highestRevenue = this.peopleData[index].balance;
			this.highestRevenueUser = this.peopleData[index];
		}

		this.totalRevenue = this.totalRevenue + this.peopleData[index].balance;

		// calculating how many users are active.
		if (this.peopleData[index].isActive) {
			this.peopleActive++;
		}

		this.totalUsers++;
	}

	this.lowestRevenue = this.highestRevenue;
	this.lowestRevenueUser = this.highestRevenueUser;

	for (let index in this.peopleData) {
		// finding the lowest revenue and it user.
		if (this.peopleData[index].balance < this.lowestRevenue) {
			this.lowestRevenue = this.peopleData[index].balance;
			this.lowestRevenueUser = this.peopleData[index];
		}
	}	
  }

}
