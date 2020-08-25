import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
import { NgForm } from '@angular/forms';
import { UserPwd } from '../userpwd';
import { UserObj } from '../userobj';
// import { USERPWD } from '../mock-users';
const BACKEND_URL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = ""
  password:string = ""
  verify:boolean = false
  feedback:string = ""
  user:UserObj = {username: "User1", birthdate: "01/01/1990", age: 30, email: "user1@gmail.com", password: "123", valid: false}
  userpwd = new UserPwd()


  constructor(private router:Router, private httpClient:HttpClient) { }
  
  ngOnInit(): void {
  }

  public loginFunc(){
    this.userpwd.email = this.email
    this.userpwd.password = this.password

    this.httpClient.post(BACKEND_URL + '/api/auth', this.userpwd, httpOptions)
    .subscribe((data: any) => {
      if (data.valid){
        sessionStorage.setItem('username', data.username);
        sessionStorage.setItem('birthdate', data.birthdate);
        sessionStorage.setItem('age', data.age);
        sessionStorage.setItem('email', data.email);
        this.router.navigateByUrl('account');
      } else {
        alert('Sorry, email or password is wrong')
      }
    });
  }
  
  // login(){
  //   this.verify = false
  //   var users = [{'email': 'user1@gmail.com', 'password': '123'},
  //                {'email': 'user2@gmail.com', 'password': '123'},
  //                {'email': 'user3@gmail.com', 'password': '123'}];
  //   for (var user of users){
  //     if (user.email == this.email && user.password == this.password){
  //       this.verify = true;
  //       this.feedback = 'Login Successful';
  //       this.router.navigateByUrl('/account');
  //     }
  //   }
  //   if (!this.verify){
  //     this.feedback = 'Email or password doesn\'t match';
  //   }
  // }
}
