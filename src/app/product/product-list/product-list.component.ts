import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    const productObservable = this.productService.getProducts();

    productObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (err) => {
        console.log("エラーが発生しました。");
      },
      )
  }
}
