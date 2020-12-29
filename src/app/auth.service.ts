import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public static BaseUrl = "http://localhost:3000/";

logout(){
  localStorage.removeItem('user');
  this.router.navigate(['Login']);
}

  getEmployeesData(data:any|null) {
    if(data==null){
      return this.httpClient.get(AuthService.BaseUrl+'employees',httpOptions);
    }
    else{
      return this.httpClient.get(AuthService.BaseUrl+`employees?email=${data.email}&password=${data.password}`,httpOptions);
    } 
  }

  getEmpData(){
    this.getEmployeesData(null).subscribe(data => {
      console.log(data,'da')
      return data;  
  },
  error => {
      console.log(error,'err')
  })
  }

  constructor(private httpClient: HttpClient,private router:Router) { }
}
