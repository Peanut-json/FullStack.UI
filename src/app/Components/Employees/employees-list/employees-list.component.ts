import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee [] = [
    {
      id:"1",
      name:'Billy',
      email: 'billy@hotmail.com',
      phone:798653537647,
      salary:50000,
      department:'IT  '
    },
    {
      id:"2",
      name:'Sarah',
      email: 'Sarah@hotmail.com',
      phone:79869248982,
      salary:200000,
      department:'IT  '
    },
    {
      id:"3",
      name:'Matty',
      email: 'Matty@hotmail.com',
      phone:793896474747,
      salary:4000000,
      department:'IT  '
    },
  ];
// static employee list to use instead of .net API , when implimented this will be removed. 

  constructor() { }

  ngOnInit(): void {
   
  }

}
