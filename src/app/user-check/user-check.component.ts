import { Component, OnInit } from '@angular/core';
import { matDialogAnimations, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainCheckoutComponent } from '../main-checkout/main-checkout.component';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.css']
})
export class UserCheckComponent implements OnInit {

  constructor(
    public router:Router,
    public ref:MatDialogRef<UserCheckComponent>) { }

  ngOnInit(): void {
  }
  onClickNewUser(){
    this.router.navigateByUrl('/new-user')

  }
  onClickReturningUser(){
    this.router.navigateByUrl('/returning-user')
  }
  onClick(){
    this.ref.close()
    console.log('2432424242')
  }

}
