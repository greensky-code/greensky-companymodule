import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from  '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;

  constructor(private router: Router, private route : ActivatedRoute , private fb : FormBuilder) {  
    this.loginForm = this.fb.group({
      "login_id" : new FormControl("" , [Validators.required]),
      "password" : new FormControl("" , [Validators.required])
    })
   }

   get loginId() {
     return this.loginForm.get('login_id')
   }

   get password() {
    return this.loginForm.get('password')
  }

  ngOnInit() {
  }

  navigateToCompany(){
    this.router.navigate(['company'])
  }

}
