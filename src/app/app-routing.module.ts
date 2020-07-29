import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Route2Component} from './route2/route2.component';
import {HomeComponent} from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
 


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'route2',
    component: Route2Component
  },

  {
    path: 'page1',
    component: Page1Component
  },

  {
    path: 'page2',
    component: Page2Component
  },

  {
    path: 'page3',
    component: Page3Component
  },

  {
    path: 'page4',
    component: Page4Component
  },

  {
    path: '',
    redirectTo: '/page1',
    pathMatch: 'full' 
  },

  {
    path: '**',
    redirectTo: '/page1',
    pathMatch: 'full' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
