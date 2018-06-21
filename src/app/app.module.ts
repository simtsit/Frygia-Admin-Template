// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

// Main App Component
import { AppComponent } from './app.component';

// Element Components
import { SidebarComponent } from './sidebar/sidebar.component';
// import { NavbarComponent } from './navbar/navbar.component';

// Sidebar Nav Major Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';

// Lesser Components
import { CardsComponent } from './cards/cards.component';
import { PiechartsimpleComponent } from './piechartsimple/piechartsimple.component';
import { BarchartsimpleComponent } from './barchartsimple/barchartsimple.component';

// Services
import { PeopleService } from './people.service';
import { CalendarComponent } from './calendar/calendar.component';
import { GeoChartComponent } from './geo-chart/geo-chart.component';

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
    GeoChartComponent
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
         }            
      ])
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
