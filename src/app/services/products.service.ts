import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';



@Injectable()
export class ProductService {


  constructor(private http:HttpClient) { }

  getProducts(): Observable<any>{
    let token = localStorage.getItem('access_token');
    return this.http.get<any>('http://localhost:8081/api/products/priceHistory',
  {headers: new HttpHeaders().set('Authorization','Bearer' + token)}
   );
  }
  }
