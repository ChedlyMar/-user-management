import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IEmployee } from './employee';

@Injectable({
    providedIn :"root"
})


export class EmployeeService {    
  _url:string = "api/employees";

  constructor(private http:HttpClient){}
    

  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  handleError(handleError: any): import("rxjs").OperatorFunction<unknown, IEmployee[]> {
    throw new Error("Method not implemented.");
  }


  getEmploy(id: number): Observable<IEmployee> {
    if (id === 0) {
       console.log("haha");
      
    }
    const url = `${this._url}/${id}`;
    return this.http.get<IEmployee>(url)
    .pipe(
      tap(data => console.log('getEmploee: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );   
}


}