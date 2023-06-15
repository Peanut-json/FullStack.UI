import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../Models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {


  baseApiUrl : string = environment.baseAPIUrl; // this is creating a link between the enviroment baseAPI to there to use in our method 
  constructor(private http: HttpClient) { }


  getAllEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees')
  }
}
// this getAllEmployees method will return a observable that can be mapped ot the Employee arry object so when the data is sent through it wil mapp to the arry and insert itself automatically. 

