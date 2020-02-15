import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeDatailComponent } from './employees/employee-datail.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


const routes: Routes = [
  { path : 'employees', component: EmployeesComponent  },
  { path : 'welcome', component: WelcomeComponent  },
  { path : 'employee/:name', component: EmployeeDatailComponent  },
  { path : 'add-employee', component: AddEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
