import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-logged',
  templateUrl: './account-logged.component.html',
  styleUrls: ['./account-logged.component.scss']
})
export class AccountLoggedComponent implements OnInit {
user = JSON.stringify(sessionStorage.getItem('username'));
userUsername = sessionStorage.getItem("username");

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
home(){
  this.router.navigateByUrl('/home');
}
logoutUser(){
  sessionStorage.removeItem('currentUser');
  sessionStorage.removeItem('username');
  
  this.router.navigateByUrl('');
}

myOffers(){

  this.router.navigate(['myOffers']);
}
addOffer(){
  this.router.navigateByUrl('addOffer');
}
}
