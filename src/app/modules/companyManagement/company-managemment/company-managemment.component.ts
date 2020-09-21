import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-managemment',
  templateUrl: './company-managemment.component.html',
  styleUrls: ['./company-managemment.component.css']
})
export class CompanyManagemmentComponent implements OnInit {
  step:string="";
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
    console.log("this.url",this.router.url)
    this.step = this.router.url;
  }

  active(){
    console.log("this.url",this.router.url)

    this.step = this.router.url;

  }

}
