import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResendOtpComponent } from '../resend-otp/resend-otp.component';
import { UserCheckComponent } from '../user-check/user-check.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  enableButton=false
  otp = new FormControl("");
  number=''
  dt=''
  constructor(
    private router:Router,
    public dialog:MatDialog) { }

  ngOnInit(): void {
    this.number=localStorage.getItem('num')!
  }
  openDialog(){
    this.router.navigateByUrl('/main-form')
    // const dialogref=this.dialog.open(UserCheckComponent);
    // dialogref.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');

    // });
  }
  onResend(){
    this.dialog.open(ResendOtpComponent);
  }
  onOtpChange(){
    this.enableButton=true
    
  }
  onClick(){
    this.router.navigateByUrl('/main-checkout')
  }
  onBack(){
    this.router.navigateByUrl('/main-checkout')
  }

}
