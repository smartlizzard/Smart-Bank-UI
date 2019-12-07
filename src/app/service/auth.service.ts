import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Auth{
  constructor(
    public status:string,
     ) {}
  
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient) { }

/////////use this code for testing UI////no server connection here
  // authenticate(username, password) {
  //   if (username === "user" && password === "password") {
  //     sessionStorage.setItem('username', username)
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }



  ///////////uncomment this code while trying to connecto server///////////////
  authenticate(username, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<Auth>('http://smart-bank-service:8090/validatelogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('username',username);
        ///Added for Http Interceptor
        let authString = 'Basic ' + btoa(username + ':' + password);
          sessionStorage.setItem('basicauth', authString);
          ////end
        return userData;
       }
     )

    );
  }
  ////////////////server connection End/////////////////


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}

