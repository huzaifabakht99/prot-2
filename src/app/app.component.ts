import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainCheckoutComponent } from './main-checkout/main-checkout.component';
import { DeviceDetectorService } from 'ngx-device-detector';
import { SignInReturningUserComponent } from './sign-in-returning-user/sign-in-returning-user.component';
import { MainCheckoutReturningComponent } from './main-checkout-returning/main-checkout-returning.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='';
  constructor(public dialog:MatDialog) { 

  }

  openDialog(){
    this.dialog.open(MainCheckoutComponent,{
      height:'100%',
      panelClass: 'custom-dialog',
    });
    console.log
  }
  openDialogReturning(){
    this.dialog.open(MainCheckoutReturningComponent,{
      height:'100%',
      panelClass: 'custom-dialog-returning',
    });
    console.log
  }

}
