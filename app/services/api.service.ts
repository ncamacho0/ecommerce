import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

const API: string = '/api/';

@Injectable()
export class ApiService {
  constructor(private http: Http) {}

  getAll(json_name: string): Observable<any[]> {
    return this.http
      .get(`${API}/${json_name}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  getOne(json_name: string, id: number): Observable<any> {
    return this.http
      .get(`${API}/${json_name}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  put<T>(json_name: string, payload: T): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .post(`${API}/${json_name}/`, payload, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(console.log(error.json())));
  }

  update<T>(json_name: string, id: number, payload: T): Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${API}/${json_name}/${id}`, payload, options)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }

  remove(json_name: string, id: number): Observable<any> {
    return this.http
      .delete(`${API}/${json_name}/${id}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}
