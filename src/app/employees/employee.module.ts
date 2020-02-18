import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeDatailComponent } from './employee-datail.component';
import { RoleComponent } from '../role/role.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDatailComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class EmployeeModule { }
