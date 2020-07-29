import { Component } from '@angular/core';
import { PiService } from './pi.service'; // step 1: import
import { AreaCalcService} from './area-calc.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PiService, AreaCalcService] // step 2: list as provider
})
export class AppComponent {

  seconds: number = 0;
  
  // pi service stuff
  title = 'mock-server';
  pi: number;

  constructor(
    private PiService: PiService, // step 3: instantiate in constructor
  ) { }

  
  ngOnInit(){
    this.pi = this.PiService.getPi();
  }
}
