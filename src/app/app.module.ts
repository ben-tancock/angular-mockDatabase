import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDeleteComponent } from './create-delete/create-delete.component';
import { DataService } from '../app/data.service'

@NgModule({
  declarations: [
    AppComponent,
    CreateDeleteComponent
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
