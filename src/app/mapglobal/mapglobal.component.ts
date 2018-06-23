import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapglobal',
  templateUrl: './mapglobal.component.html',
  styleUrls: ['./mapglobal.component.css']
})
export class MapglobalComponent implements OnInit {

  constructor() { }

google;

  ngOnInit() {
  	
		function myMap() {
		var mapOptions = {
		    center: new google.maps.LatLng(51.5, -0.12),
		    zoom: 10,
		    mapTypeId: google.maps.MapTypeId.HYBRID
		}
		var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		}  	
  }

}
