// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

// Main App Component
import { AppComponent } from './app.component';

// Element Components
import { SidebarComponent } from './elements/sidebar/sidebar.component';
// import { NavbarComponent } from './elements/navbar/navbar.component';

// Services
import { PeopleService } from './people.service';

// Page Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './pages/table/table.component';
import { MappageComponent } from './pages/mappage/mappage.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

// Various Components
import { CardsComponent } from './various/cards/cards.component';
import { PiechartsimpleComponent } from './various/piechartsimple/piechartsimple.component';
import { BarchartsimpleComponent } from './various/barchartsimple/barchartsimple.component';
import { GeoChartComponent } from './various/geo-chart/geo-chart.component';
import { MapglobalComponent } from './various/mapglobal/mapglobal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // NavbarComponent,
    TableComponent,
    CardsComponent,
    DashboardComponent,
    PiechartsimpleComponent,
    BarchartsimpleComponent,
    CalendarComponent,
    GeoChartComponent,
    MappageComponent,
    MapglobalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
         {
            path: '',
            component: DashboardComponent
         },
         {
            path: 'dashboard',
            component: DashboardComponent
         },
         {
            path: 'table',
            component: TableComponent
         },
         {
            path: 'calendar',
            component: CalendarComponent
         },
         {
            path: 'map',
            component: MappageComponent
         }          
      ])
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
