import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomImageServiceService {
  // need list of images...
  private images = [
    {
      url: '../assets/images/meme0.jpg',
      title: 'first doggo'
    },

    {
      url: '../assets/images/meme1.jpg',
      title: 'second doggo'
    },

    {
      url: '../assets/images/meme2.jpg',
      title: 'third doggo'
    },

    { 
      url: '../assets/images/meme3.jpg',
      title: 'fourth doggo'
    }
  ];

  imageChange: Observable<any>;
  constructor() {
    this.imageChange = new Observable(observer => {
      this.changeLoop(observer);
    })
   }

  // takes in the observable response object through observer
  changeLoop(observer){
    setTimeout(() => { // setTimeout() takes a callback function, and then a second number argument for its delay
      let imgIndex = this.getRandom(0, 3);
      let image = this.images[imgIndex];

      // why .next? why not just observer...?
      // 
      observer.next(
        {
          url: image.url,
          title: image.title,
          width: this.getRandom(200, 400)
        }
      );
      this.changeLoop(observer); // recursive call
    }, this.getRandom(100, 1000)); // the delay (random)
  }

  // returns random width...?
  getRandom(min: number, max: number):number{
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // imageChange is set in the constructor, which then calls changeLoop, which recursisvely calls itself 
  getRandomImage(): Observable<any>{
    return this.imageChange;
  }

}
