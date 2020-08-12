import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:String = ""
  password:String = ""
  verify:Boolean = false
  feedback:String = ""

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  login(){
    this.verify = false
    var users = [{'email': 'user1@gmail.com', 'password': '123'},
                 {'email': 'user2@gmail.com', 'password': '123'},
                 {'email': 'user3@gmail.com', 'password': '123'}];
    for (var user of users){
      if (user.email == this.email && user.password == this.password){
        this.verify = true;
        this.feedback = 'Login Successful';
        this.router.navigateByUrl('/account');
      }
    }
    if (!this.verify){
      this.feedback = 'Email or password doesn\'t match';
    }
  }
}
