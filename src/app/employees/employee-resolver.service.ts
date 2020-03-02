import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { IEmployeeResolved, IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class EmployeeResolver implements Resolve<IEmployee>{
    constructor(private employeeService:EmployeeService) { }    

    resolve(route:ActivatedRouteSnapshot,
            state:RouterStateSnapshot):Observable<IEmployee>{
                const id = route.paramMap.get("id");
               /* if(isNaN (+id)){
                    const message=`Employee id was not a number: ${id}`;
                    console.error(message);
                    return of({employee:null, error:message});
                }*/
                return this.employeeService.getEmploy(+id);
                /*
                return this.employeeService.getEmploy(+id).pipe(
                    map(employee=>{employee:IEmployeeR})),
                    catchError(error=>{
                        const message=`Employee id was not a number: ${id}`;
                        console.error(message);
                        return of({employee:null, error:message});
                    })
                );*/
    }
}