import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ApiService } from '../../../services/api.service';
import { Product } from '../../models/product.interface';

@Component({
  selector: 'product-viewer-new',
  styleUrls: ['product-viewer-new.component.scss'],
  template: `
    <div class="go-back">
      <button (click)="goBack()">
        &lsaquo; Go back
      </button>
      <product-form-new (post)="onPutProduct($event)"> </product-form-new>
    </div>
  `
})
export class ProductViewerNewComponent implements OnInit {
  product: Product;
  json_name: string = 'products';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ApiService
  ) {}
  ngOnInit() {
    // this.route.params
    //   .switchMap((data: Product) => this.productService.getProduct(data.id))
    //   .subscribe((data: Product) => this.product = data);
  }
  onPutProduct(event: Product) {
    this.productService
      .put(this.json_name, event)
      .subscribe((data: Product) => {
        this.product = Object.assign({}, this.product, event);
      });
    this.goBack();
  }

  goBack() {
    this.router.navigate(['/products']);
  }
}
