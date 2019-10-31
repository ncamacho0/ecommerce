import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { ProductOrder } from '../../models/product-order.interface';

@Component({
  selector: 'product-order-dashboard',
  styleUrls: ['product-order-dashboard.component.scss'],
  template: `
  <div class="dashboard center">
    <div class="container center">
      <product-order-detail *ngFor="let order of orders" [detail]="order"> </product-order-detail>
    </div>
  </div>
  `
})
export class ProductOrderDashboardComponent {
  orders: ProductOrder[];
  json_name: string = 'orders';
  constructor(private productOrderService: ApiService) {}
  ngOnInit() {
    this.productOrderService
      .getAll(this.json_name)
      .subscribe((data: ProductOrder[]) => (this.orders = data));
  }
}
