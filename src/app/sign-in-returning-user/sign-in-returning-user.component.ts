import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-returning-user',
  templateUrl: './sign-in-returning-user.component.html',
  styleUrls: ['./sign-in-returning-user.component.css']
})
export class SignInReturningUserComponent implements OnInit {

 
  number=new FormControl('');
  // getErrorMessage() {
  //   if (this.number.hasError('required')) {
  //     return 'You must enter a NUMBER';
  //   }
  //   return this.number.hasError('number') ? 'Not a valid number' : '';
  // }

  constructor(private router: Router,) {}

  ngOnInit(): void {
  
  }
  onSignIn(){
    // window.location.href = '/main-checkout/otp';
    this.router.navigateByUrl("/otp-returning-user")
    localStorage.setItem('num', this.number.value!)
   
  }
  onGuestSignIn(){
    localStorage.setItem('numberGuest', this.number.value!)
    this.router.navigateByUrl('/main-form-guest')
  }
  

}
