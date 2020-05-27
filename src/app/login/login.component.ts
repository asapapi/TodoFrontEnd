import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Asahi123';
  password  = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor() { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.username === 'Asahi123' && this.password === 'password'){
      this.invalidLogin =  false;

    } else {
      this.invalidLogin = true;
    }

    // console.log(this.username);
  }
}
