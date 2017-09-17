import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import {BurgersService} from './services/burgers.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [BurgersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
