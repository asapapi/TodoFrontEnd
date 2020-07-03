import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {ErrorComponent} from './error/error.component';
import {ListTodosComponent} from './list-todos/list-todos.component';
import {LogoutComponent} from './logout/logout.component';
import {RoutGuardService} from './service/rout-guard.service';


const routes: Routes = [
  // Welcome component
  {path:  '', component: LoginComponent}, // this sets the default path url to go to the login page with url localhost:4200
  {path: 'login', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent, canActivate: [RoutGuardService]},
  {path: 'todos', component: ListTodosComponent, canActivate: [RoutGuardService] },
  {path: 'logout', component: LogoutComponent, canActivate: [RoutGuardService ]},

  {path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
