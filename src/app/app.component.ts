import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './app.component.html',
  providers: [EmployeeService]
})
export class AppComponent {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
