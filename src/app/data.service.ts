import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  createDb(){
    const users = [
      {
        "id": 1,
        "userName": "brendan",
        "email": "brendan@gmail.com"
      },

      {
        "id": 2,
        "userName": "ryan",
        "email": "ryan@gmail.com"
      },

      {
        "id": 3,
        "userName": "bob",
        "email": "bob@gmail.com"
      },

      {
        "id": 4,
        "userName": "mitchell",
        "email": "mitchell@gmail.com"
      },
    ]
    return {users};
  }

}
