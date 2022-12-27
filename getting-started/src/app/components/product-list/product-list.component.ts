import { Component } from '@angular/core';

import { Product } from '../../models/product';
import { ProductService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  onNotify(product: Product) {
    window.alert(
      `You will be notified when the ${product.name.toUpperCase()} goes on sale`
    );
  }
}
