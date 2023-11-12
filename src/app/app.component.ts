import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crs-frontend';


  loginForm = new FormGroup({
    username: new FormControl(''),
    pwd: new FormControl(''),
    role: new FormControl('')
  });
  


  login(){
    if(this.loginForm.get('username')?.value == ''){

    } else if(this.loginForm.get('pwd')?.value == ''){

    }
    else if(this.loginForm.get('role')?.value == ''){

    }
    else {
      
    }
  }
}
