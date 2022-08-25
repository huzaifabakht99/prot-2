import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OtpComponent } from './otp/otp.component';
import { MainFormComponent } from './main-form/main-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { UserCheckComponent } from './user-check/user-check.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CancelComponent } from './cancel/cancel.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { PaymentMethodBottomsheetComponent } from './payment-method-bottomsheet/payment-method-bottomsheet.component';
import { DeliveryTypeBottomsheetComponent } from './delivery-type-bottomsheet/delivery-type-bottomsheet.component';
import { ShippingInfoBottomsheetComponent } from './shipping-info-bottomsheet/shipping-info-bottomsheet.component';
import { ContactInfoBottomsheetComponent } from './contact-info-bottomsheet/contact-info-bottomsheet.component';
import { MainCheckoutComponent } from './main-checkout/main-checkout.component';

import { ResendOtpComponent } from './resend-otp/resend-otp.component';
import { MatMenuModule} from '@angular/material/menu';
import { NgOtpInputModule } from  'ng-otp-input';
import { OrderDetailGuestComponent } from './order-detail-guest/order-detail-guest.component';
import { MainFormGuestComponent } from './main-form-guest/main-form-guest.component';
import { OrderMenuBarComponent } from './order-menu-bar/order-menu-bar.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LeaveComponent } from './leave/leave.component';
import {MatTabsModule} from '@angular/material/tabs';
import { OtpReturningUserComponent } from './otp-returning-user/otp-returning-user.component';
import { SignInReturningUserComponent } from './sign-in-returning-user/sign-in-returning-user.component';
import { ReturningMenuBarComponent } from './returning-menu-bar/returning-menu-bar.component';
import { MainCheckoutReturningComponent } from './main-checkout-returning/main-checkout-returning.component';










@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    OtpComponent,
    MainFormComponent,
    OrderDetailComponent,
    UserCheckComponent,
    CancelComponent,
    OrderReviewComponent,
    PaymentMethodBottomsheetComponent,
    DeliveryTypeBottomsheetComponent,
    ShippingInfoBottomsheetComponent,
    ContactInfoBottomsheetComponent,
    MainCheckoutComponent,
    ResendOtpComponent,
    OrderDetailGuestComponent,
    MainFormGuestComponent,
    OrderMenuBarComponent,
    OrderPlacedComponent,
    LeaveComponent,
    OtpReturningUserComponent,
    SignInReturningUserComponent,
    ReturningMenuBarComponent,
    MainCheckoutReturningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    FormsModule,
    MatBottomSheetModule,
    NgOtpInputModule,
    MatMenuModule,
    MatDatepickerModule,
    MatTabsModule
 
   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
