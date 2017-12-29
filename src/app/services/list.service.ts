import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map' ;
@Injectable()
export class ListService {

  constructor(private http: Http) { }
  getAll(){
    return   this.http.get("data/list.json")
          .map(res =>res.json());
  }
}
