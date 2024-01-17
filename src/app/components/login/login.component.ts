import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/interfaces/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    pwd: new FormControl(''),
    role: new FormControl('')
  });
  

  login(){
    if(this.loginForm.get('username')?.value == ''){
      alert('UserName cannot be empty! Please enter valid username.')
    } else if(this.loginForm.get('pwd')?.value == ''){
      alert('Password cannot be empty! Please enter your password.')
    }
    else if(this.loginForm.get('role')?.value == ''){
      alert(`Please select 'admin','Manager','Engineer' or 'Customer' according to your role, before clicking login!`);
    }
    else {
      let loginUser:User = {
        userId: <string>this.loginForm.get('username')?.value,
        password: <string>this.loginForm.get('pwd')?.value,
        loginStatus: false,
        userType: <string>this.loginForm.get('role')?.value
      };
      this.userService.login(loginUser)
      .subscribe(
        (resp:User) => {
          if(resp==null || !resp){
            alert(`Please check your credentials and try again!`)
          }
          else {
            let route = '';
            switch(resp.userType){
              case "admin":
                {route = '/homepage/admin';
                break;}
              case "engineer":
                {route = '/homepage/engineer';
              break;}
              case "manager":
                {route = '/homepage/manager';
              break;}
              case "customer":
                {route = '/homepage/customer';
              break;}
              default:
                {route = ''; break;}
            }
            this.router.navigate([route]);
          }
        }
      );
    }
  }
}
