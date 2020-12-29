import { Component, OnInit,Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalFormComponent } from '../modal-form/modal-form.component';
// import {AuthService} from '../auth.service'

@Component({
  selector: 'app-profilepage',
  templateUrl: './profilepage.component.html',
  styleUrls: ['./profilepage.component.css']
})
export class ProfilepageComponent implements OnInit {
  @Input() user:any;
  constructor(public dialog: MatDialog,) { }

  openDialog(emp:object|null) {
    console.log(emp,'emp')
    const dialogRef = this.dialog.open(ModalFormComponent, {
      data: emp
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result) console.log(result);
    });
  }
  
  ngOnInit(): void {
  }

}
