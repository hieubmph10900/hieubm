import { Component, OnInit } from '@angular/core';
import { ProductType } from '../product/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productall',
  templateUrl: './productall.component.html',
  styleUrls: ['./productall.component.css']
})
export class ProductallComponent implements OnInit {
  products: ProductType[];
  constructor(private productService: ProductService) { }
  
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productService.getProducts().subscribe(data => {
  
      this.products = data;
    });
  
  }

}
