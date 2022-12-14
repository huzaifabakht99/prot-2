import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
// import { CartComponent } from '../cart/cart.component';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-order-menu-bar',
  templateUrl: './order-menu-bar.component.html',
  styleUrls: ['./order-menu-bar.component.css']
})
export class OrderMenuBarComponent implements OnInit {
  quantity=1
  totalValueProduct=1890
  total=1990
  total1=this.total+150;
  total2=this.total+350;
  total3=this.total+500;
  showCounter=false;
  remove=false;
  deliveryType=0
  selectedOpt=0
  @Input() discount=false;
  // price=(360*this.quantity)+5.95+(1.26*this.quantity);
  showCart=false;
  title = 'flow2';
  // price=''
  constructor(
    private service:SharedService,
    public data:DataService,
    public dialog:MatDialog) { 
      this.service.optionMainForm.subscribe(opt => {
        if(opt){
          
          this.selectedOpt=opt;
        }
      })
    }

  ngOnInit(): void {
    this.deliveryType=this.data.getDeliveryType()
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(100*this.quantity)
    //  this.price=this.data.getprice()
  }
  onShowCart(){
    this.showCart=!this.showCart
    console.log(this.showCart)
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
    this.totalValueProduct=(1890*this.quantity)
    this.total=(1890*this.quantity)+(100*this.quantity)
    this.total1=(1890*this.quantity)+(100*this.quantity)+150
    this.total2=(1890*this.quantity)+(100*this.quantity)+350
    this.total3=(1890*this.quantity)+(100*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(100*this.quantity)

  }
  onMinus(){
    this.quantity--
    this.totalValueProduct=(1890*this.quantity)
    this.total=(1890*this.quantity)+(100*this.quantity)
    this.total1=(1890*this.quantity)+(100*this.quantity)+150
    this.total2=(1890*this.quantity)+(100*this.quantity)+350
    this.total3=(1890*this.quantity)+(100*this.quantity)+500
    this.service.subtotalAmount(this.totalValueProduct)
    this.service.taxAmount(100*this.quantity)
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
