import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})
export class EmployeesComponent implements OnInit {

  pageTitle:string="Employees list";
  showImages:boolean=false;
  isAdmin:boolean;
  isManager:boolean;
  isBilling:boolean;
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
  employees:IEmployee[]=[];

  constructor(private employeeService:EmployeeService,
              private router:ActivatedRoute) {
   }
   
  ngOnInit() {
    this._listFilter=this.router.snapshot.queryParamMap.get("filteredBy")||"";
    this.showImages=this.router.snapshot.queryParamMap.get("showImage")==="true";
  
      this.employeeService.getEmployee().subscribe({
      next: employees => {
        this.employees = employees;
        this.filtredEmployee = this.performFilter(this._listFilter);      
      },
      error: err => this.errorMessage = err    
    })

    
  }

   performFilter(filterBy: string): IEmployee[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.employees.filter((employee: IEmployee) =>
    employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  isAdminChange(e){
    this.isAdmin=e;
  }
  isManagerChange(e){
    this.isManager=e;
  }
  isBillingChange(e){
    this.isBilling=e;
  }

  toggleImages(){
    this.showImages=!this.showImages;
  }




}