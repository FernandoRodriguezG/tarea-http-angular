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

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  configUrlTodos = 'https://jsonplaceholder.typicode.com/todos/';
  urlEmployee = 'http://localhost:3000/api/employees';
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
}
