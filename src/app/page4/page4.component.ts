import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PromiseService } from '../promise.service';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css'],
  providers: [PromiseService]
})
export class Page4Component implements OnInit {
  seconds: number = 0;

  constructor(private alert: PromiseService) { }

  createAlert(){
    this.alert.createTimedAlert(this.seconds);
  }


  ngOnInit(): void {
  }

}
