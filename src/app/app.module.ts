import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeesComponent } from './employees/employees.component';
import { RoleComponent } from './role/role.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeDatailComponent } from './employees/employee-datail.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './login/forget-password.component';
import { ResetPasswordComponent } from './login/reset-password.component';
import { MyProfileComponent } from './login/my-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeesComponent,
    RoleComponent,
    WelcomeComponent,
    EmployeeDatailComponent,
    AddEmployeeComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    MyProfileComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
