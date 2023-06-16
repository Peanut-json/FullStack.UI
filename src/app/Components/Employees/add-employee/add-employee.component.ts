import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeRequest: Employee = {

    id: '',
    name:'',
    email:'',
    phone: 0,
    salary:0,
    department:''
  }


  constructor(private employeeService: EmployeesService , private router:Router) { }

  ngOnInit(): void {
  }



  //**AddEmployee function to add new employees 
  addEmployee() {
   this.employeeService.addEmployee(this.addEmployeeRequest) //* remember to never ; this since this needs to subscribe to observable.
   .subscribe({
    next: (employee) => {
     this.router.navigate(['employees'])
    }
   });

   
  }
}

