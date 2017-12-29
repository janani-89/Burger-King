import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {BurgersService} from './../services/burgers.service';
import {ListService} from './../services/list.service';
import {OrderService} from './../services/order.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],

})
export class MenuComponent implements OnInit {
  isIn = false;
  toggle() {
    let bool = this.isIn;
    this.isIn = bool ===false?true:false;
  }
  burgers: Array<any>;
  menus: Array<any>;
  //@Input() burger: String;
  
  error: string;

  //@Output() clicked = new EventEmitter<string>();
  constructor(
              private http: Http,
              private burgersService : BurgersService,
              private listService : ListService,
              private router: Router,
              private orderService:OrderService
              ) { }

  ngOnInit() {
    this.burgersService.getAllBurgers()
    .subscribe(
      data => this.burgers = data,
      error => this.error = error.statusText
    );
    this.listService.getAll().subscribe(
      data => this.menus = data,
      error => this.error = error.statusText
    );
  }
  /*addBag(burger:string){
        
    this.clicked.emit(burger);
    console.log(burger);
    this.router.navigateByUrl('/login');
  }*/
  addBag(burger:string){
    console.log(burger);
    this.orderService.setBurger(burger);
    this.router.navigateByUrl('/login');
  }
}
