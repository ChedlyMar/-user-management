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
  

  filtredEmployees:IEmployee[];
  _listFilter:string;


  get listFilter():string{
    return this._listFilter;
  }

  set listFilter(value:string){
    this._listFilter=value;
  }

  employees:IEmployee[]=[
    {
      "name": "Dali",
      "Role": ["admin","manager","billing"],
      "Email":"daly@gmail.com",
      "Status":"active",
      "imageUrl":"src\assets\dali.png"
    },
    {
      "name": "Mido",
      "Role": ["billing"],
      "Email":"mido@gmail.com",
      "Status":"invited",
      "imageUrl":"assets\dali"
    },
    {
      "name": "Kimo",
      "Role": ["admin","manager"],
      "Email":"kimo@gmail.com",
      "Status":"inactive",
      "imageUrl":"..\assets\images\dali.png"
    },
    {
      "name": "Mimo",
      "Role": ["manager"],
      "Email":"mimo@gmail.com",
      "Status":"active",
      "imageUrl":"..\assets\images\dali.png"
    }
  ];

  constructor() { }

  toggleImages(){
    this.showImages=!this.showImages;
  }

  ngOnInit() {
  }

}
