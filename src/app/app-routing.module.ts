import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCheckoutComponent } from './main-checkout/main-checkout.component';
import { MainFormGuestComponent } from './main-form-guest/main-form-guest.component';
import { MainFormComponent } from './main-form/main-form.component';
import { OrderDetailGuestComponent } from './order-detail-guest/order-detail-guest.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { OtpReturningUserComponent } from './otp-returning-user/otp-returning-user.component';
import { OtpComponent } from './otp/otp.component';
import { SignInReturningUserComponent } from './sign-in-returning-user/sign-in-returning-user.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  // {path: 'main-checkout', component:SignInComponent},
  // {path: 'main-checkout/main-form', component:MainFormComponent},
  // {path: 'main-form', component:MainFormComponent},
  // {path: 'order-review/sign-in/main-form', component:MainFormComponent},
  // {path: 'main-form/sign-in', component:SignInComponent},
  // {path: 'main-form/order-detail', component:OrderDetailComponent},
  // {path: 'order-review', component:OrderReviewComponent},
  // {path: 'order-review/sign-in', component:SignInComponent},
  // {path: 'order-review/sign-in/otp/sign-in', component:SignInComponent},
  // {path: 'main-checkout/otp', component:OtpComponent},
  // {path: 'main-form/sign-in/otp', component:OtpComponent},
  // {path: 'order-review/sign-in/otp', component:OtpComponent},
  // {path: 'main-checkout', component:MainCheckoutComponent},
  // {path: 'main-checkout/otp/sign-in', component:SignInComponent},
  // {path: 'main-checkout/otp/sign-in/otp', component:OtpComponent},
  // {path: 'main-checkout/otp/sign-in/main-form', component:MainFormComponent},
  // {path:'main-form/order-detail/sign-in', component:SignInComponent},
  // {path:'main-form/order-detail/main-form',component:MainFormComponent},
  // {path:'main-form-guest/order-detail/main-form-guest',component:MainFormGuestComponent},
  // {path:'main-form/sign-in/main-form-guest',component:MainFormGuestComponent},
  // {path:'main-form/sign-in/main-form-guest/order-detail-guest',component:OrderDetailGuestComponent},
  // {path:'main-form/sign-in/main-form-guest/order-detail-guest/sign-in',component:SignInComponent},
  // {path:'main-form/order-detail/sign-in/main-form',component:MainFormComponent},
 
  // // {path:'main-checkout/main-form/order-detail-guest', component:OrderDetailGuestComponent}
  // {path:'main-checkout/main-form-guest', component:MainFormGuestComponent},
  // {path:'main-checkout/main-form-guest/sign-in',component:SignInComponent},
  // {path:'main-checkout/main-form-guest/sign-in/main-form-guest',component:MainFormGuestComponent},
  // {path:'main-checkout/main-form-guest/sign-in/main-form-guest/sign-in',component:SignInComponent},
  // {path:'main-checkout/main-form-guest/sign-in/main-form-guest/sign-in/main-form-guest',component:MainFormGuestComponent},
  // {path:'main-checkout/main-form-guest/order-detail-guest',component:OrderDetailGuestComponent},
  // {path:'main-checkout/otp/sign-in/main-form-guest',component:MainFormGuestComponent},
  // {path:'main-checkout/otp/sign-in/main-form-guest/sign-in',component:SignInComponent},
  // {path:'main-checkout/otp/sign-in/main-form-guest/sign-in/main-form-guest',component:MainFormGuestComponent},
  // {path:'main-checkout/otp/sign-in/main-form-guest/sign-in/main-form-guest/sign-in',component:SignInComponent},
  // {path:'main-checkout/otp/sign-in/main-form-guest/sign-in/main-form-guest/sign-in/main-form-guest',component:MainFormGuestComponent},
  // {path:'main-checkout/otp/sign-in/main-form-guest/order-detail-guest',component:OrderDetailGuestComponent},
  // {path:'main-checkout/otp/sign-in/main-form-guest/sign-in/main-form-guest/order-detail-guest',component:OrderDetailGuestComponent},
  // {path:'main-checkout/main-form-guest/sign-in/main-form-guest/order-detail-guest',component:OrderDetailGuestComponent},
  // {path:'main-checkout/main-form-guest/order-detail-guest/sign-in',component:SignInComponent},
  // {path:'main-form/order-detail/main-checkout',component:MainCheckoutComponent},

  // //guest 
  // {path:'main-checkout/main-form-guest/sign-in/main-form-guest',component:MainFormGuestComponent},






  {path:'main-checkout',component:SignInComponent},
  {path:'main-checkout-returning',component:SignInReturningUserComponent},
  // {path:'Sign-in',component:SignInComponent},
  {path:'main-form',component:MainFormComponent},
  {path:'order-detail',component:OrderDetailComponent},
  {path:'main-form-guest',component:MainFormGuestComponent},
  {path:'order-detail-guest',component:OrderDetailGuestComponent},
  {path:'order-review',component:OrderReviewComponent},
  {path:'otp',component:OtpComponent},
  // {path:'sign-in-returning',component:SignInReturningUserComponent},
  {path:'otp-returning-user',component:OtpReturningUserComponent},
  // {path:'',component:MainFormGuestComponent},
  // {path:'',component:MainFormGuestComponent},
  // {path:'',component:MainFormGuestComponent},
  // {path:'',component:MainFormGuestComponent},
  // {path:'',component:MainFormGuestComponent},
  // {path:'',component:MainFormGuestComponent},
  // {path:'',component:MainFormGuestComponent},
  

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
