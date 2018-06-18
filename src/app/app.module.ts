import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { CardsComponent } from './cards/cards.component';

import { PeopleService } from './people.service';
import { PiechartsimpleComponent } from './piechartsimple/piechartsimple.component';
import { BarchartsimpleComponent } from './barchartsimple/barchartsimple.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    TableComponent,
    CardsComponent,
    DashboardComponent,
    PiechartsimpleComponent,
    BarchartsimpleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
