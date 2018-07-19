import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

	toggle(event) {
		$('.menuItemLabel').addClass('toggled');
		$('.logo').addClass('toggled');
		$('.sidebarWrapper').addClass('sidebarWrapperToggled');
	}

  constructor() { }

  ngOnInit() {
  }

}
