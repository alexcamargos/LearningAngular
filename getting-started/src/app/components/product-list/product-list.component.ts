import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { products } from '../../data/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent {
  products: Product[] = products;

  constructor() {
    this.products = products;
  }
}
