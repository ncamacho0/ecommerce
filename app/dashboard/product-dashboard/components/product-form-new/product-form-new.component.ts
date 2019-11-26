import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.interface';


@Component({
  selector: 'product-form-new',
  styleUrls: ['product-form-new.component.scss'],
  templateUrl: 'product-for-new.component.html'
})
export class ProductFormNewComponent {

  @Input() detail: Product;

  @Output() post: EventEmitter<Product> = new EventEmitter<Product>();

  toggleAvailable(available: boolean) {
    available = false;
    if (available) {
      this.detail.available = !available;
    }
  }

  handleSubmit(product: Product, isValid: boolean) {
    if (isValid) {
      this.post.emit(product);
    }
  }

}
