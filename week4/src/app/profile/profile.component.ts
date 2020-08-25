import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username = sessionStorage.getItem("username");
  email = sessionStorage.getItem("email");
  birthdate = sessionStorage.getItem("birthdate");
  age = sessionStorage.getItem("age");
 

  constructor(private router:Router) { }

  ngOnInit(): void {
    if (!this.email){
      this.router.navigate(['/']);
    }
  }
  changeData(){
    sessionStorage.setItem('username', this.username);
    sessionStorage.setItem('birthdate', this.birthdate);
    sessionStorage.setItem('age', this.age);
    sessionStorage.setItem('email', this.email);
    this.router.navigate(['/account']);
  }
}
