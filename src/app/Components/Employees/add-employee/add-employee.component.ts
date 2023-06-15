import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

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


  constructor() { }

  ngOnInit(): void {
  }
  addEmployee() {
    console.log(this.addEmployeeRequest);
  }
}
