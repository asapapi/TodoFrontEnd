import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    console.log(this.isUserLoggedIn());
    if (username === 'asahi123' && password === 'password') {


          sessionStorage.setItem('authenticaterUser', username);
          console.log(this.isUserLoggedIn());
          return true;

    }
    return false;
  }

  isUserLoggedIn() {
   const user = sessionStorage.getItem('authenticaterUser');
   return !(user === null);
  }
}

