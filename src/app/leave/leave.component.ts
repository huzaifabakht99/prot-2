import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MainCheckoutComponent } from '../main-checkout/main-checkout.component';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor(
    private router:Router,
    public dialog:MatDialog,
    public ref:MatDialogRef<LeaveComponent>) { }

ngOnInit(): void {
}
openDialog(){
const dialogref=this.dialog.open(LeaveComponent,{
width:'302px',
height:'auto',
});
dialogref.afterClosed().subscribe(result => {
console.log('The dialog was closed');

});
}
onClick(){
this.ref.close()
console.log('2432424242')
}
onClickYes(){
  // this.ref.close(MainCheckoutComponent)
  location.reload()
  console.log('2432424242')
  // this.router.navigateByUrl('')
  }

}
