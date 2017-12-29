import { Component, OnInit, Input } from '@angular/core';
import {OrderService} from './../services/order.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  burger:string;
  constructor(private orderService:OrderService) { }

  ngOnInit() {
    this.burger = this.orderService.getOrder();
  }
  
}
