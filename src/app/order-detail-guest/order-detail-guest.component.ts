import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CancelComponent } from '../cancel/cancel.component';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-order-detail-guest',
  templateUrl: './order-detail-guest.component.html',
  styleUrls: ['./order-detail-guest.component.css']
})
export class OrderDetailGuestComponent implements OnInit {
  name=''
  add=''
  num=''
  subtotalAmount=0
  radio=0
  taxAmount=0
  selectedOpt=0
  selectedMethod=''
  deliveryType=0
   constructor(
    private router:Router,
    private service:SharedService,
    private data:DataService,
    public dialog:MatDialog) {
      this.service.optionMainForm.subscribe(opt => {
        if(opt){
          
          this.selectedOpt=opt;
        }
      })
      this.service.subtotal.subscribe(opt => {
        if(opt){
          
          this.subtotalAmount=opt;
        }
      })
      this.service.tax.subscribe(opt => {
        if(opt){
          
          this.taxAmount=opt;
        }
      })
     }

  ngOnInit(): void {
    this.radio=this.data.getDeliveryType()
    this.name=localStorage.getItem('fullNameGuest')!
    this.add=localStorage.getItem('shippingAddressGuest')!
    this.num=localStorage.getItem('numberGuest')!
    console.log(this.radio)
    this.selectedMethod= this.data.getSelectedMethod()
    console.log(this.radio)

  }
  openDialog(){
    const dialogref=this.dialog.open(CancelComponent);
    dialogref.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  onReturn(){
    this.router.navigateByUrl('/main-checkout')
  }
  onBack(){
    this.router.navigateByUrl('/main-form-guest')
  }

}
