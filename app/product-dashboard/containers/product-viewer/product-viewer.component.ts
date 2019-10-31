import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

 //import 'rxjs/add/operator/switchMap';
 import { switchMap } from 'rxjs/operators';


import { ApiService } from '../../../services/api.service';

import { Product } from '../../models/product.interface';

@Component({
  selector: 'product-viewer',
  styleUrls: ['product-viewer.component.scss'],
  template: `
    <div class="go-back">
      <button (click)="goBack()">
        &lsaquo; Go back
      </button>
      <product-form [detail]="product" (update)="onUpdateProduct($event)">
      </product-form>
    </div>
  `
})
export class ProductViewerComponent implements OnInit {
  product: Product;
  json_name: string = 'products';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ApiService
  ) {}
  ngOnInit() {

    this.route.params.pipe(
      switchMap((data: Product) =>
        this.productService.getOne(this.json_name, data.id))
      ) .subscribe((data: Product) => (this.product = data));
  }
  onUpdateProduct(event: Product) {
    this.productService
      .update<Product>(this.json_name, event.id, event)
      .subscribe((data: Product) => {
        this.product = Object.assign({}, this.product, event);
      });
    this.goBack();
  }
  goBack() {
    this.router.navigate(['/products']);
  }
}
