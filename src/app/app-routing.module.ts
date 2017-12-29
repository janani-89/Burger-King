import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ThankyouComponent} from './thankyou/thankyou.component';
const routes: Routes = [
{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'menu',
  component: MenuComponent
},
{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'thankyou',
  component: ThankyouComponent
},
{
  path: '**', 
  redirectTo: '',
  component: HomeComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
