import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.sass'],
})
export class ProductAlertsComponent {
  @Input() product!: Product;

  lowTargetPrice = 1000;
  highTargetPrice = 2000;

  constructor() {}

  share(product: Product) {
    window.alert(`The ${product.name} has been shared!`);
  }
}
