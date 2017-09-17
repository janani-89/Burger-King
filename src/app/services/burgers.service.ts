import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
export class BurgersService {

  constructor(private http: Http) { }

  getAllBurgers(){
      return   this.http.get("data/burgers.json")
            .map(res =>res.json());

  }
}
