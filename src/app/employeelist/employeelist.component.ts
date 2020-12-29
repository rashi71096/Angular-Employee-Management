import { Component, OnInit,Input } from '@angular/core';
import {AuthService} from '../auth.service'
import {MatDialog} from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
import {ServicesemployeeserviceService} from '../servicesemployeeservice.service';
import { Validators, FormBuilder} from "@angular/forms";

export interface EmployeeDataStruct {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  designation:string;
  grade:string;
  DOJ:string;
  salary:number;
}

export class SearchFilters {
  constructor(
    public attribute:string,
    public attributeVal: any,
  ) { }
}



@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  dataSource:any;
  @Input() user:any;
  constructor(private authService:AuthService,private fb:FormBuilder,
    public dialog: MatDialog,private employeeService:ServicesemployeeserviceService) { }

  searchForm = this.fb.group({
    attribute: ["", [Validators.required]],
    attributeVal: ["", [Validators.required]],
  });



  openDialog(emp:object|null) {
    console.log(emp,'emp')
    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: emp
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) this.getEmpData();
    });
  }

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email','designation','grade','salary','DOJ','actions'];
  
  ngOnInit() {
   this.getEmpData()
  }
getEmpData(){
this.searchForm.reset();
  this.authService.getEmployeesData(null).subscribe(data => {
    console.log(data,'da')
    
    this.dataSource=data;    
},
error => {
    console.log(error,'err')
})
}

filterData(){
 
 if(this.searchForm.value.attribute && this.searchForm.value.attributeVal){
   console.log('heyAm')
  if(this.searchForm.value.attribute==='salary'){
    this.dataSource=this.dataSource.filter((datum:any)=>datum[this.searchForm.value.attribute]===parseInt(this.searchForm.value.attributeVal,10));
  }
 else{
  this.dataSource=this.dataSource.filter((datum:any)=>datum[this.searchForm.value.attribute]===this.searchForm.value.attributeVal);
 }
 }
}

delete(id:string){
  this.employeeService.deletefitnessdata(id).subscribe((res)=>{
    if(res) this.getEmpData()
  })
}

}
