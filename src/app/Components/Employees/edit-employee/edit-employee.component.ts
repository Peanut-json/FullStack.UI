import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService ,  private router:Router) { } 

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
  
  updateEmployee() {
    this.employeeService.updateEmpoloyee(this.employeeDetails.id , this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }

//* updateEmployee() method takes in the injected service and uses the method to create logic.
//* within the perameters of the method the perameters are the Id and the object itself to identify and athen also the updating of the body. 

//* when using subscribe the method used here will be when the responce is triggered and once it is will route back to 'employees' page (had to use method form add emplpoyee and inject it into the imports and also the constructor. )

  deleteEmployee(id: string ){
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next:(response) => {
        this.router.navigate(['employees'])
      }
    });
  }
}




