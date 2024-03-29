import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _router: Router) { }

  /**
   * this is used to clear anything that needs to be removed
   */
  clear(): void {
    localStorage.clear();
  }

  /**
   * check for expiration and if token is still existing or not
   * @return {boolean}
   */
  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  // simulate jwt token is valid
  // https://github.com/theo4u/angular4-auth/blob/master/src/app/helpers/jwt-helper.ts
  isTokenExpired(): boolean {
    return false;
  }

  loginAdmin(): void {
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6Ikp1YW4iLCJTdXJuYW1lIjoiTG9wZXoiLCJFbWFpbCI6Imp1YW5AZXhhbXBsZS5jb20iLCJyb2xlIjoiQWRtaW4ifQ.3IjMuwTFsLk3uzGppiZWvoDZ78mKQRTLZyye3FL4XPc`);

    this._router.navigate(['/dashboard']);
  }

  login(): void {
    localStorage.setItem('token', `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1MzMyNzM5NjksImV4cCI6MTU2NDgxMDAwNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiVGVzdCBHdWFyZCIsIkdpdmVuTmFtZSI6Ikx1aXMiLCJTdXJuYW1lIjoiQW50b25pbyIsIkVtYWlsIjoibHVpc0BleGFtcGxlLmNvbSJ9.0xLz9OzPAXBDO20bEbpeeGJzelBcdjByE0w_-1z-qfc`);

    this._router.navigate(['/dashboard']);
  }

  /**
   * this is used to clear local storage and also the route to login
   */
  logout(): void {
    this.clear();
    this._router.navigate(['/login']);
  }

  decode() {
    return jwt_decode(localStorage.getItem('token'));
  }
}
