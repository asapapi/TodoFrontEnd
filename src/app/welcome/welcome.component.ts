import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WelcomeDataService} from '../service/data/welcome-data.service';
// import {AppComponent} from '../app.component';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message';
  welcomeMessageFromService: string;
  name = '';

  constructor(private route: ActivatedRoute,
              private service: WelcomeDataService
  ) { }

  ngOnInit() {
   this.name = this.route.snapshot.params.name;
  }

  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
response => this.handleSuccessfulResponse(response)
    );
    // console.log('get Welcome message');
  }

  handleSuccessfulResponse(response) {
  this.welcomeMessageFromService = response.message;  }

}
