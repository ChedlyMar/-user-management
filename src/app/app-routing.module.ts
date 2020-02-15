import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeDatailComponent } from './employees/employee-datail.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './login/forget-password.component';
import { ResetPasswordComponent } from './login/reset-password.component';
import { MyProfileComponent } from './login/my-profile.component';


const routes: Routes = [
  { path : 'employees', component: EmployeesComponent  },
  { path : 'welcome', component: WelcomeComponent  },
  { path : 'employee/:name', component: EmployeeDatailComponent  },
  { path : 'add-employee', component: AddEmployeeComponent },
  { path : 'login', component: LoginComponent },
  { path : 'forget-password', component: ForgetPasswordComponent },
  { path : 'reset-password', component: ResetPasswordComponent },
  { path : 'my-profile', component: MyProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
