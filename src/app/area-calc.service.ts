import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AreaCalcService {

  circle(radius: number): number {
    return Math.PI * radius * radius
  }

  square(base: number): number {
    return base * base;
  }

  rectangle(length: number, width: number): number {
    return length * width;
  }

  triangle(base: number, height: number): number {
    return (base * height)/2;
  }

  trapezoid(base1: number, base2: number, base3: number): number{
    let thing = base1 + base2;
    thing = thing/2;
    console.log(base1 + " " + base2 + " " + base3 + " " + thing);
    return thing*base3;
  }


  constructor() { }
}
