import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule], // 共通モジュールとHTTPモジュール
  templateUrl: './app.component.html',
  providers: [EmployeeService]
})
export class AppComponent {
  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => (this.employees = data),
      error: (err) => console.error('社員情報の取得に失敗しました', err)
    });
  }
}
