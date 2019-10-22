import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from '../product-dashboard/models/product.interface';

const PRODUCT_API: string = '/api/products';

@Injectable()
export class ProductDashboardService {
  constructor(private http: Http) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get(PRODUCT_API)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getProduct(id: number): Observable<Product> {
    return this.http
      .get(`${PRODUCT_API}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
  putProduct(product: Product): Observable<Product> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .post(`${PRODUCT_API}/`, product, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(console.log(error.json())));
  }

  updateProduct(product: Product): Observable<Product> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${PRODUCT_API}/${product.id}`, product, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  removeProduct(product: Product): Observable<Product> {
    return this.http
      .delete(`${PRODUCT_API}/${product.id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

}