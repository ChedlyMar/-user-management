import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn :"root"
})


export class EmployeeService {
    
  constructor(private http:HttpClient){}
    
  _url:string = "assets/data/emlpyees.json";

  getEmployee(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
}