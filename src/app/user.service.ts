import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'api/users'
  constructor(private http: HttpClient) { }

  getUsers(): Promise<Object[]> {
    console.log("getting users...");
    console.log("get: " + this.http.get(this.url).toPromise().then(res => console.log(res)));
    return this.http.get(this.url).toPromise().then((res:any) => res).catch(this.handleError) // you MUST use :any or a custom response type if data doesn't exist on the thing
    // all I had to do to get this line to work was change .then((res:any) => res.data) to .then((res:any) => res) 
  }

  deleteUser(id: number): Promise<void>{
    var delUrl = this.url + '/' + id;
    this.http.get(delUrl).toPromise().then((res:any) => console.log("thing to delete: " + JSON.stringify(res)));

    // how exactly is this deleting stuff?
    // so it takes a promise, and sets something to null...
    // there is a requests for getUsers after this is done, which refreshes the list I believe.
    // New angular seems to make getting and parsing stuff (json objects, get and post stuff) more straightforward
    // instead of curly braces, quotes, $, just have this.url/<thing> etc.
    return this.http.delete(delUrl).toPromise().then(()=>null).catch(this.handleError);
  }

  createUser(user): Promise<any>{
    var usersArr = null;
    return this.http.get(this.url).toPromise().then((res:any) => {
      if(res.length == 0){
        console.log("users is null");
        return this.http.post<any>(this.url, { // this line used to JSON.stringify the post object, just keep in mind you don't really need to do that anymore!
          id: 1,
          userName: user.userName,
          email: user.email
        }).toPromise().then((res:any) => res.data).catch(this.handleError);
      }
      else{
        console.log("users is NOT null");
        return this.http.post<any>(this.url, { // this line used to JSON.stringify the post object, just keep in mind you don't really need to do that anymore!
          userName: user.userName,
          email: user.email
        }).toPromise().then((res:any) => res.data).catch(this.handleError);
      }

    });
  }

  private handleError(error:any): Promise<any>{
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
