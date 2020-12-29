import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';
import {EmployeeHomeComponent} from '../app/employee-home/employee-home.component';

// localStorage.removeItem('user')
const routes: Routes = [
  {
    path: '',
    redirectTo: localStorage.getItem('user') === null ? 'Login' : 'EmployeeHome',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'EmployeeHome',
    component: EmployeeHomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
