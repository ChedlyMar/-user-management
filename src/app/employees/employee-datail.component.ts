import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { IEmployee } from './employee';
import { EmployeeResolver } from './employee-resolver.service';
import { EmployeeService } from './employee.service';


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

  constructor(private route:ActivatedRoute,
              private router:Router,
              private employeeService:EmployeeService) { }

  ngOnInit() {
    const id= +this.route.snapshot.paramMap.get('id');
    this.getEmployee(id);
  }

  getEmployee(id:number){
    this.employeeService.getEmploy(id).subscribe({
      next: (employee:IEmployee) => this.onProductRetrieved(employee),
      error: err => this.errorMessage = err
    });
  }

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
