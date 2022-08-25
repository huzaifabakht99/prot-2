import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from '../data.service';
import { DeliveryService } from '../delivery.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-returning-menu-bar',
  templateUrl: './returning-menu-bar.component.html',
  styleUrls: ['./returning-menu-bar.component.css']
})
export class ReturningMenuBarComponent implements OnInit {

  quantity=1
  totalValueProduct=1099
  total=1149
  total1=this.total+150;
  total2=this.total+350;
  total3=this.total+500;
  showCounter=false;
  remove=false;
  deliveryType=''
  selectedOpt=0
  @Input() discount=false;
  // price=(360*this.quantity)+5.95+(1.26*this.quantity);
  showCart=false;
  title = 'flow2';
  // price=''
  constructor(
    private deliveryService:DeliveryService,
    private service:SharedService,
    public data:DataService,
    public dialog:MatDialog) { 
      this.service.optionMainForm.subscribe(opt => {
        if(opt){
          
          this.selectedOpt=opt;
        }
      })
      this.deliveryService.change.subscribe(value => {
        if (value) {
          console.log(value);
          this.deliveryType = value;
        }
      });
    }

  ngOnInit(): void {
    // this.deliveryType=this.data.getDeliveryType()
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(50*this.quantity)
    //  this.price=this.data.getprice()
  }
  onShowCart(){
    this.showCart=!this.showCart
  }
  
  // onclick(){
  //   this.showCounter=!this.showCounter;
  // }
  // onClickCart(){
  //   this.dialog.open(CartComponent,{
  //     width:'376px',
  //     position:{top:'125px'},
  //   })
  //   this.showCart=!this.showCart;
  //   console.log("sdcsc")
  // }
  onclick(){
    this.showCounter=!this.showCounter;
  }
  onAdd(){
    this.quantity++
    this.totalValueProduct=(1099*this.quantity)
    this.total=(1099*this.quantity)+(50*this.quantity)
    this.total1=(1099*this.quantity)+(50*this.quantity)+150
    this.total2=(1099*this.quantity)+(50*this.quantity)+350
    this.total3=(1099*this.quantity)+(50*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(50*this.quantity)

  }
  onMinus(){
    this.quantity--
    this.totalValueProduct=(1099*this.quantity)
    this.total=(1099*this.quantity)+(50*this.quantity)
    this.total1=(1099*this.quantity)+(50*this.quantity)+150
    this.total2=(1099*this.quantity)+(50*this.quantity)+350
    this.total3=(1099*this.quantity)+(50*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(50*this.quantity)
  }
  onRemove(){
    this.remove=!this.remove
    this.total=0;
    this.total1=0;
    this.total2=0;
    this.total3=0;
    this.service.subtotalAmount(this.total)
  }

}

