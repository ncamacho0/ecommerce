import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { Product } from '../../models/product.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'product-dashboard',
  styleUrls: ['product-dashboard.component.scss'],
  templateUrl: 'product-dashboard.component.html'
})

export class ProductDashboardComponent implements OnInit {
  products: Product[];
  json_name: string = 'products';
  constructor(private router: Router, private productService: ApiService) {}
  ngOnInit() {
    this.productService
      .getAll(this.json_name)
      .subscribe((data: Product[]) => (this.products = data));
  }

  handleEdit(event: Product) {
    this.productService
      .update<Product>(this.json_name, event.id, event)
      .subscribe((data: Product) => {
        this.products = this.products.map((product: Product) => {
          if (product.id === event.id) {
            product = Object.assign({}, product, event);
          }
          return product;
        });
      });
  }
  handleRemove(event: Product) {
    this.productService
      .remove(this.json_name, event.id)
      .subscribe((data: Product) => {
        this.products = this.products.filter((product: Product) => {
          return product.id !== event.id;
        });
      });
  }

  handleView(event: Product) {
    this.router.navigate(['/dashboard/products', event.id]);
  }
}
