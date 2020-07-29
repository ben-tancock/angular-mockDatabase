import { Component, OnInit } from '@angular/core';
import { RandomImageServiceService } from '../random-image-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css'],
  providers: [RandomImageServiceService] // step 2: list as provider
})
export class Page3Component implements OnInit {

  // random image stuff (variable data service)
  randImg: Observable<any>; // we need to instantiate an image to randomly change with the service
  imgInfo: any; // other stuff we need for image things
  imgHistory: any[];

  constructor(private randImages: RandomImageServiceService) 
  {
    // variable data stuff (here we just instantiate stuff that's image-related)
    this.imgInfo = { // set starting img to loading
      url: '',
      title: 'loading...',
      width: 400
    };

    this.imgHistory = []; // no images have been displayed (yet)
  }

  ngOnInit(){
    // randImg assigned to the getRandomImage of the Random Image SERVICE
    this.randImg = this.randImages.getRandomImage();

    // observables are declaratives: you define a function for publishing values, but it is not executed until a consumer subscribes to it.
    // all observables have a subscribe function, which you can modify sort of (make certain things happen when subscribing)
    // I'm pretty sure imageData is a next method, for the subscribe function...
    // the next method is used to send messages to an observable, which are then sent to all angular components that are subscribers (aka observers) of that observable

    // randImg is assigned to a method of the Random Image Service, which we then subscribe to...
    // the confusing part to me is that it doesn't seem to specify what it's subscribing to.
    // is it subscribing to the RIS because it was assigned to a method of the RIS previously?
    // the getRandomImage() of the RIS service has been called. The RIS initiates the recursiveness in the service CONSTRUCTOR, 
    // is the service constructor called as soon as the service is called to in any way?
    // imageChange is instantiated in the constructor, and calls the changeloop function, which is recursive
    this.randImg.subscribe(
      imageData => { // imageData = the messages sent to THIS observable, which we (app component) are now subscribed to -- 
        this.imgInfo = imageData;               //we're NOT subscribed to the service, but the DATA the observable RECIEVES (from the service!)
        this.imgHistory.push(imageData);    // .subscribe = whenever an update happens, do thing!
        console.log("pushed imgHistory: " + JSON.stringify(imageData));
        console.log("image history: " + this.imgHistory);
      }
    )
  }

}
