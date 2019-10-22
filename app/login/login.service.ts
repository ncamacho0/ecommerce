import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './models/auth-form.interface';

const USER_API: string = '/api/users';

@Injectable()
export class UserDashboardService {
  constructor(private http: Http) {}

  login(username:string, password:string): Observable<User> {
    return this.http
      .get(`${USER_API}/${username}`)
      .map((response: Response) => response.json())
      .catch((error: any) => Observable.throw(error.json()));
  }
}