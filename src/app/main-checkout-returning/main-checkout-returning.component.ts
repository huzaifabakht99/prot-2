import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { LeaveComponent } from '../leave/leave.component';
import { MainCheckoutComponent } from '../main-checkout/main-checkout.component';

@Component({
  selector: 'app-main-checkout-returning',
  templateUrl: './main-checkout-returning.component.html',
  styleUrls: ['./main-checkout-returning.component.css']
})
export class MainCheckoutReturningComponent implements OnInit {
  showCart=false;
  showCounter=false;
  title = 'flow2';
  price=''
  constructor(
    public data:DataService,
    public dialog:MatDialog,
    private dialogRef:MatDialogRef<MainCheckoutComponent>) { }

  ngOnInit(): void {
     this.price=this.data.getprice()
  }
  
  onclick(){
    this.showCounter=!this.showCounter;
  }
  onClose(){
    this.dialog.open(LeaveComponent)
  }
  // onClickCart(){
  //   this.dialog.open(CartComponent,{
  //     width:'376px',
  //     position:{top:'125px'},
  //   })
  //   this.showCart=!this.showCart;
  //   console.log("sdcsc")
  // }

}
