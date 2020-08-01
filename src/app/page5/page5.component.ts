import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from '../shared-service.service';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css'],
  providers: [SharedServiceService]
})
export class Page5Component implements OnInit {

  constructor(public shared: SharedServiceService) { } // all child components that inject shared service and subscribe to its observable will be updated anytime data changes

  ngOnInit(): void {
  }

}
