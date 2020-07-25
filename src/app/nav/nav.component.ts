import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  pages = [
    {
      'url': 'page 1',
      'text': 'page 1'
    },

    {
      'url': 'page 2',
      'text': 'page 2'
    },

    {
      'url': 'page 3',
      'text': 'page 3'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
