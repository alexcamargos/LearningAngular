import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass'],
})
export class CartComponent implements OnInit {
  items: Product[] = [];

  constructor(private cart: CartService) {}

  ngOnInit() {
    this.items = this.cart.getItems();
  }

  removeItem(item: Product) {
    this.items = this.cart.removeItem(item);
  }
}
