import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private LoginServiceService: LoginServiceService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder, private notif: NotificationsService) {
    this.loginForm = this.fb.group({
      "userId": new FormControl("", [Validators.required]),
      "password": new FormControl("", [Validators.required])
    })
  }

  get loginId() {
    return this.loginForm.get('userId')
  }

  get password() {
    return this.loginForm.get('password')
  }

  ngOnInit() {
  }

  navigateToCompany() {
    console.log(this.loginForm.value)
    this.LoginServiceService.login(this.loginForm.value).subscribe(res => {
      //  let res={
      //    statusCode:"OK",
      //    response:{
      //     "loginId": "johnny",
      //     "userId": "john378",
      //     "password": "123456",
      //     "firstName": "John",
      //     "companyId": "datanucleus",
      //     "companyName": "DataNucleus", 
      //     "companyTypeName": "PARTNER" 
      //    }
      //  }

      if (res.statusCode == "OK") {
        let success = res.response
        localStorage.setItem("companyId", success.companyId);
        localStorage.setItem('loginId', success.loginId)
        localStorage.setItem('companyName', success.companyName)
        localStorage.setItem('companyTypeName', success.companyTypeName)
        this.notif.success(
          'Logged In successfully',
          '',
          {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 50
          }
        )
        this.router.navigate(['company'])
      }
      else {
        this.notif.error(
          'NO DATA FOUND',
          '',
          {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 50
          }
        )

      }
    }, (error) => {
      this.notif.error(
        'Error',
        error.error.message,
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          maxLength: 50
        }
      )
    })
  }

}
