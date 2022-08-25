import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ContactInfoBottomsheetComponent } from '../contact-info-bottomsheet/contact-info-bottomsheet.component';
import { DeliveryService } from '../delivery.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-delivery-type-bottomsheet',
  templateUrl: './delivery-type-bottomsheet.component.html',
  styleUrls: ['./delivery-type-bottomsheet.component.css']
})
export class DeliveryTypeBottomsheetComponent implements OnInit {
  selectedRadio='0'
  isChecked=true

 constructor(
  private deliveryService:DeliveryService,
  private bsRef:MatBottomSheetRef<ContactInfoBottomsheetComponent>) { }

  ngOnInit(): void {
  }
  onClose(){
    this.bsRef.dismiss();
  }
  onRadioSelected(){
  
    // console.log("DIV CLICKED");
    this.deliveryService.emitDeliveryValue('0');
   
  }
  onRadioSelected2(){
  
    // console.log("DIV CLICKED");
    this.deliveryService.emitDeliveryValue('1');
  
  }
  onRadioSelected3(){
  
    // console.log("DIV CLICKED");
    this.deliveryService.emitDeliveryValue('2');
   
  }
  onDone(){
    this.bsRef.dismiss()
  }

}
