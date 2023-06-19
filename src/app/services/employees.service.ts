import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  baseApiUrl: string = environment.baseAPIUrl; // * this is creating a link between the enviroment baseAPI to there to use in our method 

  constructor(private http: HttpClient) { }


// *this getAllEmployees method will return a observable that can be mapped ot the Employee arry object so when the data is sent through it wil mapp to the arry and insert itself automatically. 
// *any use of < > is a form of mapping to a object , for this we are mapping this method to the Employee[] array object

  getAllEmployees():Observable<Employee[]>{ //! this observable is being mapped to the employee array object.
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees')
  }

  //* this is a function that will pass our service to the API. 
  
 addEmployee(addEmployeeRequest: Employee):Observable<Employee>{
 return this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest)
 }



 //* for the post request breakdown :
  //* we create a addEmployee method that takes in addEmployee request that OFTYPE Employee.
  //* we then return this.http.**post** since this si a post request not a GET. We map it to the Employee interface and this will then POST to the Database we have created in .NET ( this being the variable string we created that links to the API.) and alos the bosy of the design pattern. 
  //*the method is then made into a Observable and mapped to the Employee interface


 getEmployee(id:string):Observable<Employee>{
  return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id)
 }







  }
 





