import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	toggleOn = true; 

	toggle(event) {

			if(this.toggleOn) {
				this.toggleOn = false;
				$('.menuItemLabel').addClass('toggleOff');
				$('.logo').addClass('toggleOff');
				$('.sidebarWrapper').addClass('sidebarWrapperToggled');
				$('.container').addClass('containerToggled');
				document.getElementById('toggleButton').classList.remove('fa-angle-left');
				document.getElementById('toggleButton').classList.add('fa-angle-right');
				$('.logo').addClass('toggleOff');
				$('.logoMini').removeClass('toggleOff');

			} else {
					this.toggleOn = true;
				$('.menuItemLabel').removeClass('toggleOff');
				$('.logo').removeClass('toggleOff');
				$('.sidebarWrapper').removeClass('sidebarWrapperToggled');
				$('.container').removeClass('containerToggled');
				document.getElementById('toggleButton').classList.add('fa-angle-left');
				document.getElementById('toggleButton').classList.remove('fa-angle-right');
				$('.logo').removeClass('toggleOff');
				$('.logoMini').addClass('toggleOff');					
			}

	}

  constructor() { }

  ngOnInit() {
  }

}
