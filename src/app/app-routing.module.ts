import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  { path : 'employees', component: EmployeesComponent  },
  { path : 'welcome', component: WelcomeComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
