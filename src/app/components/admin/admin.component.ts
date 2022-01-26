
import { Component, OnInit } from '@angular/core';

import { ProductService } from "../../services/products.service";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public priceHistory: any;

  constructor(private products: ProductService) { }


  ngOnInit(): void {
    this.getProducts();
  }
  getProducts(){
    this.products.getProducts().subscribe(
      data => {this.priceHistory = data},
      err => console.log(err),
      () => console.log(this.priceHistory)


    );
  }

}
