import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeDatailComponent } from './employee-datail.component';
import { RoleComponent } from '../role/role.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EmployeeEditComponent } from './employee-edit.component';
import { EmployeesData } from './employees-data';
import { EmployeeResolver } from './employee-resolver.service';




@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeDatailComponent,
    RoleComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(EmployeesData),
    RouterModule.forChild([
      { path : 'employees', component: EmployeesComponent},
      { 
        path : 'employees/:id', 
        component: EmployeeDatailComponent,
        resolve:{resolveEmp:EmployeeResolver}
      },
      { path : 'employees/:id/edit', component: EmployeeEditComponent}      
    ])
  ]
})
export class EmployeeModule { }
