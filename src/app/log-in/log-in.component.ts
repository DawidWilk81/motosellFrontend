import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import {Router, RouterModule} from '@angular/router';
import { LowerCasePipe } from '@angular/common';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(
    private userService: UserService, 
    private router:Router,
              ) { }
user:any;

public posts:any;
public new_posts:any;

  ngOnInit() {
    this.user ={
      username: '',
      password: '',
    }
  };

home(){
  this.router.navigateByUrl('');
}
Login(){
  this.userService.loginUser(this.user).subscribe(
    response => {
      sessionStorage.setItem('currentUser', JSON.stringify(this.user));
      sessionStorage.setItem('username', JSON.stringify(this.user.username) );
      this.router.navigateByUrl('/home');
    },error =>{
      console.log('error', error);
      alert('Podane dane są nieprawidłowe');
    }
  );
}
}
window.onload = function(){
  console.log(sessionStorage);
}