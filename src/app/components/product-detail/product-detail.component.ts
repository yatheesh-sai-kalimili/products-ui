import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
 public pricesDays ;
 public today:any;
 public id:any;
 public priceData ;
  constructor( private route: ActivatedRoute,private http:HttpClient) {

  }
  pricesDaysUrl = 'http://localhost:8081/api/products/priceHistory';
  productsUrl = 'http://localhost:8081/api/products/productsInformation';
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.getPrices(this.id).pipe(tap(data=>this.pricesDays = JSON.stringify(data))).subscribe();

  }

  getPrices(id: any): Observable<any> {

    const url = `${this.pricesDaysUrl}/${id}`;
    return this.http.get<any>(url
   ) .pipe(
    tap(data => console.log('getPrices: ' + JSON.stringify(data)))
  );
  }

  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  onSubmit(){
    this.priceData = this.fetchPrice().pipe(tap(data=>console.log(JSON.stringify(data)))).subscribe();
  }

  fetchPrice(): Observable<any> {
    let date = JSON.stringify(this.today);
    date = date.slice(1,11);
    console.log(date);
    console.log(this.id);

    let data = {'productId': this.id, 'requestDate': date};
    return this.http.post<any>(this.productsUrl, JSON.stringify(data),this.httpHeader).pipe(
      tap(data => this.priceData =  JSON.stringify(data)))
    ;

  }
}
