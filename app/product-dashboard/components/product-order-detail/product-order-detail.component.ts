import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { ProductOrder } from '../../models/product-order.interface';

@Component({
  selector: 'product-order-detail',
  styleUrls: ['product-order-detail.component.scss'],
  template: `
  <div class="container">
    <div class="product-order-detail">
        <span>ID: {{detail.id }}</span>
        <span>Product Name: {{ detail.productName }}</span>
        <span>Amount:  {{ detail.amount }}</span>
        <span>Status:  {{ detail.status }}</span>
      </div>
  </div>
   
`

})
export class ProductOrderDetailComponent implements OnChanges {

  @Input()detail: ProductOrder;

  editing: boolean = false;

  constructor() {}

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

}