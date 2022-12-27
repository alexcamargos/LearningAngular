import { Injectable } from '@angular/core';

import { Product } from '../models/product';
import { products } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = products;

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}
