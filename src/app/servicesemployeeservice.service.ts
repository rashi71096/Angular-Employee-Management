import { Injectable,EventEmitter } from '@angular/core';
import { Employee } from './entity/employee';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: 'root'
})
export class ServicesemployeeserviceService {
  public static BaseUrl = "http://localhost:3000/";
  public detailsData = new BehaviorSubject<any>({});
  public notifyAppointmentUpdate: EventEmitter<boolean> = new EventEmitter();
  constructor(private httpClient: HttpClient) { }

  
  postfitnessdata(data:any){
    console.log(this.httpClient.post(ServicesemployeeserviceService.BaseUrl+'employees',data,httpOptions));
    return this.httpClient.post(ServicesemployeeserviceService.BaseUrl+'employees',data,httpOptions);
  }
  getfitnessdata(id:null|any) {
    console.log(id,'kkk')
    if(id==null){
      return this.httpClient.get(ServicesemployeeserviceService.BaseUrl+'employees',httpOptions);
    }
    else{
      console.log(this.httpClient.get(ServicesemployeeserviceService.BaseUrl+`employees/${id}`,httpOptions))
      return this.httpClient.get(ServicesemployeeserviceService.BaseUrl+`employees/${id}`,httpOptions);
    } 
    
  }
  deletefitnessdata(id:string){
    return this.httpClient.delete(ServicesemployeeserviceService.BaseUrl+`employees/${id}`,httpOptions);
  }

  editfitnessdata(data:any){
    return this.httpClient.put(ServicesemployeeserviceService.BaseUrl+`employees`,data,httpOptions);
  }
  updateEmployeeData(data:any, id:string){
    console.log('hit')
    return this.httpClient
    .patch(ServicesemployeeserviceService.BaseUrl+`employees/${id}`, data,httpOptions);
  }

  changeData(data:any){
    this.detailsData.next(data)
  }
}

