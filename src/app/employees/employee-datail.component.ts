import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { IEmployee, IEmployeeResolved } from './employee';

@Component({
  selector: 'app-employee-datail',
  templateUrl: './employee-datail.component.html',
  styleUrls: ['./employee-datail.component.less']
})
export class EmployeeDatailComponent implements OnInit {

  pageTitle:string="ha";
  employee:IEmployee;
  id :number;
  name:string;
  email:string;
  status:string;
  errorMessage: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    //const id= +this.route.snapshot.paramMap.get('id');
    //this.getEmployee(id);
    this.onProductRetrieved(this.route.snapshot.data["resolveEmp"]);
  
    //const resolveEmp:IEmployeeResolved=this.route.snapshot.data["resolveEmp"];
    //this.errorMessage = resolveEmp.error;
    //this.onProductRetrieved(resolveEmp.);
    

  }
/*
  getEmployee(id:number){
    this.employeeService.getEmploy(id).subscribe({
      next: (employee:IEmployee) => this.onProductRetrieved(employee),
      error: err => this.errorMessage = err
    });
  }
*/
  onProductRetrieved(employee: IEmployee): void {
    this.employee=employee;
    if (this.employee) {
      this.id=employee.id;
      this.name=employee.name;
      this.email=employee.Email;
      this.status=employee.Status;
      this.pageTitle = `Employee Detail: ${this.employee.name}`;
    } else {
      this.pageTitle = 'No employee found';
    }
    
  }

  

}
