import { Component, OnInit,Inject, AfterViewInit,ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Validators, FormBuilder} from "@angular/forms";
import {ServicesemployeeserviceService} from '../servicesemployeeservice.service';
import { Router } from '@angular/router';

export class Fitness {
  constructor(
    public first_name:string,
    public last_name: string,
    public email: string,
    public password: string,
    public role: string,
    public salary: number,
    public DOJ: string,
    public designation: string,
    public grade: string
  ) { }
}


@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit,AfterViewInit {
  @ViewChildren('input') vc:any;
  constructor(private router:  Router,
    public dialogRef: MatDialogRef<ModalFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private fb:FormBuilder, 
    private empService:ServicesemployeeserviceService) { }
    onNoClick(): void {
      this.dialogRef.close();
    }

    fitnessForm = this.fb.group({
      first_name: [this.data?this.data.first_name:"", [Validators.required]],
      last_name: [this.data?this.data.last_name:"", [Validators.required]],
      role: [this.data?this.data.role:"", [Validators.required]],
      email: [this.data?this.data.email:"", [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]],
      password:[this.data?this.data.password:""],
      salary:[this.data?this.data.salary:"",[Validators.required]],
      DOJ:[this.data?this.data.DOJ:""],
      designation:[this.data?this.data.designation:"",[Validators.required]],
      grade:[this.data?this.data.grade:"",[Validators.required]]
    });

  ngOnInit(): void {
    console.log(this.data,'ye')
    // this.empService.notifyAppointmentUpdate.subscribe((res:any)=>{
    //   if(res){
    //     this.empService.detailsData.subscribe((details)=>{
    //       this.updadateForm(details)
    //     })
    //   }
    // })
  }
  ngAfterViewInit(){
    this.vc.first.nativeElement.focus();
  }
  onSubmit() {

   if(this.data){
    this.update(this.fitnessForm.value,this.data.id)
    
   }
   else{
    this.empService.postfitnessdata({...this.fitnessForm.value,password:this.fitnessForm.value.first_name+this.fitnessForm.value.last_name}).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['EmployeeHome']);
    })
  }
  }
//   updadateForm(data:any,id:string){
    
//  this.employeeComp.update(data,id);
    
//   }
update(data:any,id:string){
  this.empService.updateEmployeeData(data,id).subscribe((res)=>{
    if(res) console.log(res)
  })
}
 
}
