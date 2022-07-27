import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AuthenticationGuard} from './authentication.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthenticationGuard],
  data: {
    title: 'Home'
  }
},
{
  path: 'login',
  component: LoginComponent,
  data: {
    title: 'Login'
  }
},
{
  path: '',
  component: LoginComponent,
  data: {
    title: 'Login'
  }
}  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
