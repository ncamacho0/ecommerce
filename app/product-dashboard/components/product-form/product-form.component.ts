import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'product-form',
  styleUrls: ['product-form.component.scss'],
  templateUrl: 'product-form.component.html'
})
export class ProductFormComponent {
  @Input() detail: Product;

  @Output() update: EventEmitter<Product> = new EventEmitter<Product>();

  toggleAvailable(available: boolean) {
    if (available) {
      this.detail.available = !available;
    }
  }

  handleSubmit(product: Product, isValid: boolean) {
    if (isValid) {
      this.update.emit(product);
    }
  }
}
