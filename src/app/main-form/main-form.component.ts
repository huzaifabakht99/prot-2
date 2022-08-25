import { SelectionModel } from '@angular/cdk/collections';
import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  
  
  enterManualAddress= false;
  enable=false;
  selectedMethod='';
  showPromo=false;
  isCheckedDelivery=false;
  

  

  // shippingForm = this.fb.group({
  //   email: new FormControl(''),
  //   fullName: new FormControl(''),
  //   shippingAddress: new FormControl(''),
  //   phoneNumber: new FormControl('')
  // })

  email= new FormControl('',[Validators.required,Validators.email]);
  fullName=new FormControl('',[Validators.required,Validators.minLength(4)]);
  shippingAddress= new FormControl('',[Validators.required]);
  phoneNumber= new FormControl('',[Validators.required,Validators.maxLength(11)])

  user={
    email:this.email.value,
    fullName:this.fullName.value,
    shippingAddress:this.shippingAddress.value,
    phoneNumber:this.phoneNumber.value
  }
  number=''

  // billingForm = new FormGroup({
  //   addressLine1: new FormControl(''),
  //   addressLine2: new FormControl(''),
  //   city: new FormControl(''),
  //   country: new FormControl(''),
  //   zipCode: new FormControl('')
  // })
  selectedRadio=0
  addressLine1= new FormControl('');
  addressLine2= new FormControl('');
  city= new FormControl('');
  country= new FormControl('');
  zipCode= new FormControl('');
  diliveryType=new FormControl('');
  isChecked=true
  promo= new FormControl('');

  
  
  constructor(
    private router: Router,
    private service:SharedService,
    public fb:FormBuilder,
    private data:DataService) { 
    
   }

  ngOnInit(): void {
    this.data.setData(this.user)
    // this.data.setPromo(this.showPromo)
    this.number=localStorage.getItem('num')!
    this.phoneNumber.setValue(this.number)
    // this.shippingForm.setValue({
    //   email: '',
    //   fullName: '',
    //   shippingAddress: '',
    //   phoneNumber: ''
    // });
  }
onContinue(){
  this.router.navigateByUrl('/order-detail')
  this.data.setDeliveryType(this.selectedRadio)
  console.log(this.email.value)
  console.log(this.data.getData())
  localStorage.setItem('fullName',(this.fullName.value)!)
  localStorage.setItem('shippingAddress', this.shippingAddress.value!)
  this.data.setSelectedMethod(this.selectedMethod)
  // 

}
  onClick(){
    this.enable=!this.enable;
    // console.log(this.phoneNumber.value)
  }
onClickManualAddress(){
    this.enterManualAddress=!this.enterManualAddress;
    // console.log(this.phoneNumber.value)
}
onClickCard(){
  this.selectedMethod='card'
}
onClickPaypal(){
  this.selectedMethod='paypal'
}
onClickKlarna(){
  this.selectedMethod='klarna'
}
onClickAmazon(){
  this.selectedMethod='amazon'
}
onClickPromo(){
  this.data.setDeliveryType(this.selectedRadio)
  this.showPromo=!this.showPromo
}
onSelectRadio(){
  this.service.optionMain(1)
}
onSelectRadio2(){
  this.service.optionMain(2)
}
onSelectRadio3(){
  this.service.optionMain(3)
}
onGoBack(){
  this.router.navigateByUrl('/main-checkout')
}

}
