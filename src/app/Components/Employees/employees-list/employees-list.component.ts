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
  constructor(private employeesService: EmployeesService ) { }

  ngOnInit(): void { 
    this.employeesService.getAllEmployees()
    .subscribe({
    next: (employees) => {

      this.employees = employees  // taking the value of responce and populating it into a variable.

      console.log(employees);
    },
    // loading the responce to the console aswell as the Error repsonce to the console also 
    error: (response) => {
       console.log(response);
    }
    
    })
  }

}
