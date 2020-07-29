import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {
  createTimedAlert(seconds: number): Promise<any>{
    return new Promise((resolve, reject) => {
      resolve(setTimeout(function() {
        alert('sonic is hacking ur computer (took like ' + seconds + ' seconds)');
        }, (seconds * 1000))
      );
    })
  }

  constructor() { }
}
