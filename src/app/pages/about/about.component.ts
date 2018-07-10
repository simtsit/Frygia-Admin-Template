import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pageData = {
  		"h1title": "About Frygia"
  	};

  constructor() { }

  ngOnInit() {
  }

}
