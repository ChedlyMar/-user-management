import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';

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
  role:string[]=[];
  firstElement:string="hi";
  
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filtredEmployee = this.listFilter ? this.performFilter(this.listFilter) : this.employees;
  }


    filtredEmployee:IEmployee[];
    
    employees:IEmployee[]=[
    {
      "name": "Dali",
      "Role": ["admin","manager","billing"],
      "isAdmin":true,
      "isManager":true,
      "isBilling":true,
      "Email":"daly@gmail.com",
      "Status":"active",
      "imageUrl":"assets/images/dali.png"
    },
    {
      "name": "Mido",
      "Role": ["billing"],
      "isAdmin":false,
      "isManager":true,
      "isBilling":false,
      "Email":"mido@gmail.com",
      "Status":"invited",
      "imageUrl":"assets/images/mido.png"
    },
    {
      "name": "Kimo",
      "Role": ["admin","manager"],
      "isAdmin":false,
      "isManager":false,
      "isBilling":true,
      "Email":"kimo@gmail.com",
      "Status":"inactive",
      "imageUrl":"assets/images/kimo.png"
    },
    {
      "name": "Mimo",
      "Role": ["manager"],
      "isAdmin":true,
      "isManager":false,
      "isBilling":true,
      "Email":"mimo@gmail.com",
      "Status":"active",
      "imageUrl":"assets/images/mimo.png"
    }
  ];
  
  constructor() {  
    this.filtredEmployee = this.employees;
    this.listFilter="d";
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
  }


}
