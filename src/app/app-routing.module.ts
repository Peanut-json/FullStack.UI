import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { EmployeesListComponent } from './Components/Employees/employees-list/employees-list.component';

const routes: Routes = [
  {
    path:'employees', // this when CLICKED ON will then send you to the specific FILE destination !!!! YES

    component: EmployeesListComponent // file routing destiniation
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
