
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/services/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit() {
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  addEmployee(employee:Employee){
    this.employeeService
    .createEmployee(employee).subscribe(data => {
      console.log(data)
      this.employee = new Employee();
      this.gotoList();
    });
  }

  gotoList() {
    this.router.navigate(['/employee']);
  }
}
