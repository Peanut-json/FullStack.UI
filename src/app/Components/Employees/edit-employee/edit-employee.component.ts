import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/Models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {


  employeeDetails: Employee = {
    id:'',
    name:'',
    email:'',
    phone: 0,
    salary:0,
    department:''
  };
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService) { } 

  //! this is to inject things so that we are able to connect and create paths and routes
 //! always need to be private
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if (id) {
          this.employeeService.getEmployee(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response
            }
          })
        }
      }
    })
  }
  

}
