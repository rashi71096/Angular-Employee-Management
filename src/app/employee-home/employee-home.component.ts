import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'
import { ServicesemployeeserviceService } from '../servicesemployeeservice.service';
@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {
  handleLogout() {
    this.authService.logout()
  }
  constructor(private authService: AuthService, private empservice: ServicesemployeeserviceService) { }
  userDetail: any;

  ngOnInit(): void {
    this.empservice.getfitnessdata(localStorage.getItem('user')).subscribe(data => {
      this.userDetail = data;
    },
      error => {
        console.log(error, 'err')
      })
    // this.userDetail = this.empservice.getfitnessdata(localStorage.getItem('user'))

  }

  getUserDetails() {
    return this.userDetail;
  }

}
