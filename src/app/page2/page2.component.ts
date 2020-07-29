import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AreaCalcService} from '../area-calc.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  providers: [AreaCalcService] // step 2: list as provider
})
export class Page2Component implements OnInit {
  queryParams: string = '';

  // data transform stuff (shapes)
  circleRadius: number = 0;
  baseSquare: number = 0;

  length: number = 0;
  width: number = 0;

  baseTriangle: number = 0;
  height: number = 0;

  base1: number = 0;
  base2: number = 0;
  base3: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private areaCalc: AreaCalcService,
  ) { }

  doCircle(){
    return this.areaCalc.circle(this.circleRadius);
  }

  doSquare(){
    return this.areaCalc.square(this.baseSquare);
  }

  doRectangle(){
    return this.areaCalc.rectangle(this.length, this.width);
  }

  doTriangle(){
    return this.areaCalc.triangle(this.baseTriangle, this.height);
  }

  doTrapezoid(){ // angular does this funny...
    return this.areaCalc.trapezoid(this.base1, this.base2, this.base3);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => this.queryParams = params['val']);
  }

  goBack(){
    this.router.navigate(['/page1']);
  }

  

}
