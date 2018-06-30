import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-geo-chart',
  templateUrl: './geo-chart.component.html',
  styleUrls: ['./geo-chart.component.css']
})
export class GeoChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	google.charts.load('current', {
        'packages':['geochart'],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 700]
        ]);

        var options = {
          colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }  	
  }

}
