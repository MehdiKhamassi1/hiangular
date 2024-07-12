import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='';
  password='';
  err='';

  constructor(private auth :AuthService, private router :Router){}

  login(){
    if(this.username.trim().length===0){
  this.err='username required';
    }
    else if (this.password.trim().length===0){
      this.err='password required';
    }
    else{
      this.err='';
      let res=this.auth.login(this.username,this.password)
      if (res===200){
          this.router.navigate(['home']);
      }
      if (res===403){
        this.err='invalid creds, try again.'
    }
    }
  }
}
