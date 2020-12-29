import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';  
import {AuthService} from '../auth.service'
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  allUsers:any;
  public  invalidLogin=false;
  public loginForm = new FormGroup({
    email : new FormControl(''),
    password : new FormControl('')
  });
   
  onSubmit() {  
    console.warn(this.loginForm.value);
    this.authService.getEmployeesData(this.loginForm.value).subscribe(data => {
      this.allUsers=data;
      if(this.allUsers.length>0){
        localStorage.setItem('user', this.allUsers[0].id);
        this.router.navigate(['EmployeeHome']);
      }
      else{
        this.invalidLogin=true;
        console.log(this.invalidLogin,'inc')
      }
      
  },
  error => {
      console.log(error,'err')
  })
  }  
  constructor(private authService:AuthService,private router:  Router,) { }

  ngOnInit(): void {
   
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
  }

}
