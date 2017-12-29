import { Injectable, Input, Output, EventEmitter } from '@angular/core';
import {Observable } from 'rxjs';

@Injectable()
export class OrderService {
   order: string;
  
  constructor() {
    }
    getOrder() {
      return this.order;
    }
    setBurger(order){
      this.order = order;
      console.log(this.order);
    }
}