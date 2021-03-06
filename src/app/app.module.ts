import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDeleteComponent } from './create-delete/create-delete.component';
import { DataService } from '../app/data.service';
import { UpdateComponent } from './update/update.component';
import { Route2Component } from './route2/route2.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { GoodguysComponent } from './goodguys/goodguys.component';
import { BadguysComponent } from './badguys/badguys.component';
import { Page6Component } from './page6/page6.component';
import { SharedServiceService } from './shared-service.service';
import { fromEventPattern } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CreateDeleteComponent,
    UpdateComponent,
    Route2Component,
    HomeComponent,
    NavComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    GoodguysComponent,
    BadguysComponent,
    Page6Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(DataService) // the "DataService" is IN MEMORY!
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
