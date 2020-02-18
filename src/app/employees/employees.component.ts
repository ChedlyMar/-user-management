import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  pageTitle:string="Employees list";
  showImages:boolean=true;
  isAdmin:boolean;
  isManager:boolean;
  isBilling:boolean;
  //role:string[]=[];
  //firstElement:string="hi";
  
  _listFilter = '';
  errorMessage: any;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filtredEmployee = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }


    filtredEmployee:IEmployee[]=[];
    
    employees:IEmployee[];
  
  constructor(private employeeService:EmployeeService) {
   }

   performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
    employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  isAdminChange(e){
    this.isAdmin=e;
    //this.firstElement=this.role[0]+this.role[1]+this.role[2];
    console.log(this.isAdmin);
    console.log(e);
  }
  isManagerChange(e){
    this.isManager=e;
    //this.firstElement=this.role[0]+this.role[1]+this.role[2];
    console.log(this.isManager);
    console.log(e);
  }
  isBillingChange(e){
    this.isBilling=e;
    //this.firstElement=this.role[0]+this.role[1]+this.role[2];
    console.log(this.isBilling);
    console.log(e);
  }

  toggleImages(){
    this.showImages=!this.showImages;
  }

  ngOnInit() {
  this.employeeService.getEmployee().subscribe({
    next: employees => {
      this.employees = employees;
      this.filtredEmployee = this.employees;      
    },
    error: err => this.errorMessage = err
  
  })
  }



}