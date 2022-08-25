import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CancelComponent } from '../cancel/cancel.component';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  name=''
  add=''
  num=''
  radio=0
  taxAmount=0
  subtotalAmount=0
  selectedMethod=''
  selectedOpt=0
  deliveryType=0
   constructor(
    private router:Router,
    private service:SharedService,
    private data:DataService,
    public dialog:MatDialog) {
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
    this.name=localStorage.getItem('fullName')!
    this.add=localStorage.getItem('shippingAddress')!
    this.num=localStorage.getItem('num')!
    this.selectedMethod= this.data.getSelectedMethod()


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
    this.router.navigateByUrl('/main-form')
  }

}
