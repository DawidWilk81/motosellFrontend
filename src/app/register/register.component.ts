import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Routes, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  register:any;
  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {  
    this.register = {
      username: '',
      password: '',
    };
  }
  home(){
    this.router.navigateByUrl('');
  }
  registerUser(){
     this.userService.registerUser(this.register).subscribe(
       response => {
         this.router.navigateByUrl('/home');
         console.log(response);
       },error => console.log('error:', error)
     );
  }
}
  