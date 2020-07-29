import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  text = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    
  }

  gotoPage2(){
    console.log("sending params: " + this.text);
    this.router.navigate(['/page2'], {queryParams: {val: this.text}});
  }

  

}
