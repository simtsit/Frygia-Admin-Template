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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // NavbarComponent,
    TableComponent,
    CardsComponent,
    DashboardComponent,
    PiechartsimpleComponent,
    BarchartsimpleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
         {
            path: 'dashboard',
            component: DashboardComponent
         },
         {
            path: 'table',
            component: TableComponent
         }         
      ])
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
