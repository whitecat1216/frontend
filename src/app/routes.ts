import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
// 将来的に部門一覧コンポーネントを追加する場合はインポート
// import { DepartmentListComponent } from './department-list/department-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: AppComponent },
  // { path: 'departments', component: DepartmentListComponent },
];
