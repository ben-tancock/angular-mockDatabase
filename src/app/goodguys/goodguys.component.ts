import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goodguys',
  templateUrl: './goodguys.component.html',
  styleUrls: ['./goodguys.component.css']
})
export class GoodguysComponent implements OnInit {
  @Input('shared') shared; // how is this set to a service?
  characters: Array<any>;
  constructor() { }

  ngOnInit(): void {
    console.log("test component constructor");
    console.log("characters: " + this.shared.getCharacters()); // won't run
    this.shared.getCharacters().subscribe(
      characters => this.characters = characters
    );
  }

  hitCharacter(character, damage){
    this.shared.hitCharacter(character, damage)
  }

}
