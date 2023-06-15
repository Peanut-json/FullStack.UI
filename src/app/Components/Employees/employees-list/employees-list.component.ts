import { Component, Injectable, OnInit, inject } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})

export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [];

// static employee list to use instead of .net API , when implimented this will be removed. 
  constructor(private employeesService:EmployeesService ) { }

  ngOnInit(): void { 
    this.employeesService.getAllEmployees()
    .subscribe({
    next: (employees) => {

      this.employees = employees  // *taking the value of responce and populating it into a variable.

      console.log(employees);
    },
    // *loading the responce to the console aswell as the Error repsonce to the console also 
    error: (response) => {
       console.log(response);
    }
    
    })
  }

}
//  *for the **constructor** needing to use the service by injecting the service class you had built , 
// *by doing this si meas that the sata form here will flow into the class you are working for. 
//  *(private employeesService:EmployeesService) means  the name of the variable : with the **CLASS** of whitch your implimenting 

//*Next the use of the injected class can now have its methods refrenced in buy doing **InjectedClass.methodName()**
// *or exsample:  this.employeesService.getAllEmployees()

// **!reminder since Angular uses observables you must subscribe to them in order for the method you are using to work. 