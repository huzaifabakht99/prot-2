import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ResendOtpComponent } from '../resend-otp/resend-otp.component';

@Component({
  selector: 'app-otp-returning-user',
  templateUrl: './otp-returning-user.component.html',
  styleUrls: ['./otp-returning-user.component.css']
})
export class OtpReturningUserComponent implements OnInit {
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
    this.router.navigateByUrl('/order-review')
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
