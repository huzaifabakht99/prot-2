import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

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
    this.router.navigateByUrl("/otp")
    localStorage.setItem('num', this.number.value!)
   
  }
  onGuestSignIn(){
    localStorage.setItem('numberGuest', this.number.value!)
    this.router.navigateByUrl('/main-form-guest')
  }
  

}
