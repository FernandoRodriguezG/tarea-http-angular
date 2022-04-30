import { Component, OnInit } from '@angular/core';
import { Todos,Employee, ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  config: Todos | undefined;
  configArray: Todos[] = [];
  employees: Employee[]=[];
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
  }
  clear() {
    this.config = undefined;
    this.configArray = [];
    this.employees = [];
  }
  showConfig(){
    this.configService.getConfig()
      .subscribe((data:Todos) => this.config = {
        ...data
      })
  }

  showManyConfig(){
    this.configService.getConfigTodos()
      .subscribe(users => { this.configArray = users })
  }

  showEmployees(){
    this.configService.getEmployees()
    .subscribe(employ => { this.employees = employ })
  }
}
