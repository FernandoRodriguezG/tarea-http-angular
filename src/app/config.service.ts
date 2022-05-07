import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Todos {
  configArray: any;
  userId: number;
  id: number;
  title: string;
  completed:boolean;
}

export interface Employee {
  name: string;
  email: string;
  salary: string;
}

export interface id{
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  configUrlTodos = 'https://jsonplaceholder.typicode.com/todos/';
  urlEmployee = 'http://localhost:3000/api/employees';
  urlPOST = 'https://jsonplaceholder.typicode.com/posts';
  urlEmployeePost = 'http://localhost:3000/api/employee/add';
  constructor(private http: HttpClient) { }

  getConfig(){
    return this.http.get<Todos>(this.configUrl);
  }
  getConfigTodos(){
    return this.http.get<Todos[]>(this.configUrlTodos);
  }

  getEmployees(){
    return this.http.get<Employee[]>(this.urlEmployee);
  }

  setJSon(){
    return this.http.post<Todos>(this.urlPOST,{});
  }
  setEmpleado(em: Employee){
    console.log(em);
    this.http.post<Employee>(this.urlEmployeePost,em)
    .subscribe(d => console.log(d));
  }

}
