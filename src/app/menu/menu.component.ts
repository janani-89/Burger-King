import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';
import {BurgersService} from './../services/burgers.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  burgers: Array<any>;
  error: string;
  constructor(
              private http: Http,
              private burgersService : BurgersService) { }

  ngOnInit() {
    this.burgersService.getAllBurgers()
    .subscribe(
      data => this.burgers = data,
      error => this.error = error.statusText
    );


  }

}
