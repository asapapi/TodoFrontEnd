import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

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

  // Inject Router

  constructor(private router: Router) { }

  ngOnInit() {
  }

  handleLogin() {

    if (this.username === 'Asahi123' && this.password === 'password') {
      this.router.navigate(['welcome']);
      this.invalidLogin =  false;

    } else {
      this.invalidLogin = true;
    }

    // console.log(this.username);
  }
}
//hello
