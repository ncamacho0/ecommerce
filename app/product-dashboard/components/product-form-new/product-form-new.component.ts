import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/product.interface';


@Component({
  selector: 'product-form-new',
  styleUrls: ['product-form-new.component.scss'],
  template: `
  <div  class="product-form-new center">
    <form class="form" (ngSubmit)="handleSubmit(form.value, form.valid)" #form="ngForm" novalidate>
      <div>
        Product ID:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id">
        <div *ngIf="id?.errors?.required && id.dirty" class="error">
          Product ID is required
        </div>
      </div>

      <div>
        Product name:
        <input
          type="text"
          name="name"
          required
          #name="ngModel"
          [ngModel]="detail?.name">
        <div *ngIf="name?.errors?.required && name.dirty" class="error">
          Product name is required
        </div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            name="available"
            [ngModel]="detail?.available "
            (ngModelChange)="toggleAvailable($event)">

        </label>
      </div>

      <div>
        Quantity ID:
        <input
          type="number"
          name="quantity"
          required
          #quantity="ngModel"
          [ngModel]="detail?.quantity">
        <div *ngIf="quantity?.errors?.required && quantity.dirty" class="error">
          Product quantity is required
        </div>
      </div>

      <button type="submit" [disabled]="form.invalid">
        Save
      </button>

    </form>
  </div>
  `
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
