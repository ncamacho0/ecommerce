import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { ProductOrder } from '../product-dashboard/models/product-order.interface';

const ORDER_API: string = '/api/orders';

@Injectable()
export class ProductOrderDashboardService {
  constructor(private http: Http) {}

  getOrders(): Observable<ProductOrder[]> {
    return this.http
      .get(ORDER_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json())
      );
  }

  // getProduct(id: number): Observable<ProductOrder> {
  //   return this.http
  //     .get(`${PRODUCT_API}/${id}`)
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json()));
  // }
  // putProduct(product: ProductOrder): Observable<ProductOrder> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = new RequestOptions({
  //     headers: headers
  //   });
  //   return this.http
  //     .post(`${PRODUCT_API}/`, product, options)
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(console.log(error.json())));
  // }

  // updateProduct(product: ProductOrder): Observable<ProductOrder> {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   let options = new RequestOptions({
  //     headers: headers
  //   });
  //   return this.http
  //     .put(`${PRODUCT_API}/${product.id}`, product, options)
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json()));
  // }

  // removeProduct(product: ProductOrder): Observable<ProductOrder> {
  //   return this.http
  //     .delete(`${PRODUCT_API}/${product.id}`)
  //     .map((response: Response) => response.json())
  //     .catch((error: any) => Observable.throw(error.json()));
  // }

}