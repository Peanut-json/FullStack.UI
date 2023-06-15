import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';

const routes: Routes = [
  {
    path:'employees', // this when CLICKED ON will then send you to the specific FILE destination !!!! YES

    component: EmployeesListComponent // file routing destiniation
  },
  {
    path:'employees/add', // this when CLICKED ON will then send you to the specific FILE destination !!!! YES

    component: AddEmployeeComponent // file routing destiniation
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
