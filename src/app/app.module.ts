// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AgmCoreModule } from '@agm/core';


// Main App Component
import { AppComponent } from './app.component';

// Element Components
import { SidebarComponent } from './elements/sidebar/sidebar.component';
// import { NavbarComponent } from './elements/navbar/navbar.component';

// Services
import { PeopleService } from './people.service';

// Page Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { MappageComponent } from './pages/mappage/mappage.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FormsComponent } from './pages/forms/forms.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { Page404Component } from './pages/page404/page404.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticleComponent } from './pages/article/article.component';

// Various Components
import { CardsComponent } from './various/cards/cards.component';
import { PiechartsimpleComponent } from './various/piechartsimple/piechartsimple.component';
import { BarchartsimpleComponent } from './various/barchartsimple/barchartsimple.component';
import { GeoChartComponent } from './various/geo-chart/geo-chart.component';
import { MapglobalComponent } from './various/mapglobal/mapglobal.component';
import { VariousStatisticsComponent } from './various/various-statistics/various-statistics.component';
import { DataTableComponent } from './various/data-table/data-table.component';
import { TableTopDogsComponent } from './various/table-top-dogs/table-top-dogs.component';
import { TableBottomCatsComponent } from './various/table-bottom-cats/table-bottom-cats.component';
import { FormAddUserComponent } from './various/form-add-user/form-add-user.component';
import { PersonProfileComponent } from './various/person-profile/person-profile.component';
import { ArticleContentComponent } from './various/article-content/article-content.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    // NavbarComponent,
    TablesComponent,
    CardsComponent,
    DashboardComponent,
    PiechartsimpleComponent,
    BarchartsimpleComponent,
    CalendarComponent,
    GeoChartComponent,
    MappageComponent,
    MapglobalComponent,
    VariousStatisticsComponent,
    DataTableComponent,
    TableTopDogsComponent,
    TableBottomCatsComponent,
    FormsComponent,
    FormAddUserComponent,
    ProfileComponent,
    PersonProfileComponent,
    Page404Component,
    TypographyComponent,
    AboutComponent,
    ArticleComponent,
    ArticleContentComponent,
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_PUNPCWz4lfXJ3xbf6oFr4N_WgkDcW-0'
    }),
    RouterModule.forRoot([
         {path: '',         component: DashboardComponent},
         {path: 'dashboard',component: DashboardComponent},
         {path: 'tables',   component: TablesComponent},
         {path: 'forms',    component: FormsComponent},         
         {path: 'calendar', component: CalendarComponent},
         {path: 'map',      component: MappageComponent},
         {path: 'profile',  component: ProfileComponent},
         {path: 'p404',     component: Page404Component},
         {path: 'typography', component: TypographyComponent},
         {path: 'about',    component: AboutComponent},
         {path: 'article',  component: ArticleComponent}           
      ])
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
