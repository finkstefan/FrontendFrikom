import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: {username, password} = {username:"", password:""};

  constructor(private router: Router, public authorization: AuthorizationService) { }

  ngOnInit(): void {
  }

  public LoginUser(){
    this.authorization.login(this.user)
    .subscribe(data => {
     // this.user={username:"",password:""}
      localStorage.setItem('token', data.jwt);
      this.router.navigate(['/home']);
      console.log(localStorage);
    },
    err => {
      console.log("Neuspeh");
    }, 
    () => {console.log('complete')} );
    this.user=this.user;
   }
}


