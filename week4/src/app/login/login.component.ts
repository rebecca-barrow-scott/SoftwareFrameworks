import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:String = ""
  password:String = ""

  constructor() { }

  ngOnInit(): void {
  }
  
  login(){
    var users = [{'email': 'user1@gmail.com', 'password': '123'},
                 {'email': 'user2@gmail.com', 'password': '123'},
                 {'email': 'user3@gmail.com', 'password': '123'}];
    for (var user of users){
      if (user.email == this.email && user.password == this.password){
        alert('worked');
      }
      else{
        alert('Error');
      }
    }
  }
}
