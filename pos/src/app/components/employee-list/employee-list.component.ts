import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { Observable } from "rxjs";

import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Employee } from 'src/app/services/employee/employee';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employee: Observable<Employee[]> |any;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employee = this.employeeService.getEmployeeList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  EmployeeDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update', id]);
  }
}
