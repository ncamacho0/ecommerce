import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'product-detail',
  styleUrls: ['product-detail.component.scss'],
  templateUrl: 'product-detail.component.html'
})
export class ProductDetailComponent implements OnChanges {
  @Input() detail: Product;

  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();

  @Output() remove: EventEmitter<Product> = new EventEmitter<Product>();

  @Output() view: EventEmitter<Product> = new EventEmitter<Product>();

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }
  onNameChange(value: string) {
    this.detail.name = value;
  }
  goToProduct() {
    this.view.emit(this.detail);
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  onRemove() {
    this.remove.emit(this.detail);
  }
}
