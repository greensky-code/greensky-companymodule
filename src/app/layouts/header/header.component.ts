import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  companyName:any
  loginId:any
  orgType:any
  companyId:any
  loggedDate:any
  constructor() { }

  ngOnInit() {
   this.companyName=localStorage.getItem('companyName')
   this.loginId=localStorage.getItem('loginId')
   this.orgType=localStorage.getItem('companyTypeName')
   this.loggedDate = Date.now();
  }

}
