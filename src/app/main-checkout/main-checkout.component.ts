import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { CartComponent } from '../cart/cart.component';
import { DataService } from '../data.service';
import { LeaveComponent } from '../leave/leave.component';

@Component({
  selector: 'app-main-checkout',
  templateUrl: './main-checkout.component.html',
  styleUrls: ['./main-checkout.component.css']
})
export class MainCheckoutComponent implements OnInit {
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
