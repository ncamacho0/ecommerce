import { Component, Input } from '@angular/core';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'product-count',
  template: `
    <div>
      <h1>Productos en existencia</h1>
      <div>
        Total available   : {{ checkedInCount() }}/{{ items?.length }}
      </div>
    </div>
  `
})
export class ProductCountComponent {
  @Input()
  items: Product[];
  checkedInCount(): number {
    if (!this.items) return;
    return this.items.filter((product: Product) => product.available).length;
  }
}