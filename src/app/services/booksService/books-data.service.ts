import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class BooksDataService {

  constructor(private http:Http) { 
    this.getJSON().subscribe(data => data, error =>console.log(error));
  }
  
  public getJSON() : Observable<any>{
    return this.http.get('./assets/books.json')
                    .map((res:any) => res.json())
                    .catch((error:any) => error.json());
  }
}
