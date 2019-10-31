import { Injectable } from "@angular/core";
import { Headers, Http, RequestOptions, Response } from "@angular/http";

import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { retry, catchError } from "rxjs/operators";

const API: string = "/api/";

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getAll(json_name: string): Observable<any[]> {
    return this.http.get<any>(`${API}/${json_name}`).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  getOne(json_name: string, id: number): Observable<any> {
    return this.http.get(`${API}/${json_name}/${id}`).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  put<T>(json_name: string, payload: T): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };

    return this.http.post(`${API}/${json_name}/`, payload, options).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  update<T>(json_name: string, id: number, payload: T): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    };
    return this.http.put(`${API}/${json_name}/${id}`, payload, options).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  remove(json_name: string, id: number): Observable<any> {
    return this.http.delete(`${API}/${json_name}/${id}`).pipe(
      retry(1),
      catchError(this.errorHandl)
    );
  }

  errorHandl(error) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent)
      errorMessage = error.error.message;
    else
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
