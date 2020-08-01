import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class Character {
  name: string;
  race: string;
  alignment: string;
  health: number;
}

export class SharedServiceService {
  characters: Character[] = [
    {
      name: 'Aragorn',
      race: 'Human',
      alignment: 'good',
      health: 100
    },

    {
      name: 'Gimli',
      race: 'Dwarf',
      alignment: 'good',
      health: 100
    },

    {
      name: 'Legolas',
      race: 'Elf',
      alignment: 'good',
      health: 100
    },

    {
      name: 'Witch King',
      race: 'Wraith',
      alignment: 'evil',
      health: 100
    },

    {
      name: 'Lurtz',
      race: 'Uruk-hai',
      alignment: 'evil',
      health: 100
    },

    {
      name: 'Sarumon',
      race: 'Wizard',
      alignment: 'evil',
      health: 100
    }
  ];
  
  charObservable: Observable<Character[]>;
  observer;

  constructor() {
    console.log("testing service constructor");
    this.charObservable = new Observable(observer => {
      this.observer = observer;
      this.observer.next(this.characters);
    })
    console.log("end of constructor");
   }

   getCharacters(): Observable<Character[]>{
     //console.log("getting characters: " + this.charObservable);
     return this.charObservable;
   }

   hitCharacter(character, damage){
     var index = this.characters.indexOf(character, 0);
     if(index > -1){
       this.characters[index].health -= damage;
       if(this.characters[index].health <= 0){
          this.characters.splice(index, 1);
        }
      }
      this.observer.next(this.characters);
    }
  }
