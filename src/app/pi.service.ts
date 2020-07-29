import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PiService {
  getPi(){
    return Math.PI;
  }

  constructor() { }
}
