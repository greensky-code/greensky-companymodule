import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { CompanyServiceService } from '../company-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.css']
})
export class CompanyContactComponent implements OnInit {
  contactForm: FormGroup;
  parentcomapny: any
  locationarr:any
  constructor(private activeModal : NgbActiveModal,private companyservice: CompanyServiceService,
    private notif :NotificationsService,
    private router:Router) {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      primaryContact: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit() {
    this.parentcomapny=localStorage.getItem('companyName')   
   this.companyservice.getLocation().subscribe((res)=>{
      this.locationarr = res.response
    })
  }
  save() {
    this.contactForm.value.companyId =  localStorage.getItem("companyId") || "";
    console.log("--",this.contactForm.value)
    this.companyservice.createContact(this.contactForm.value).subscribe((res) => {
      console.log("res of loca",res)
      if (res.statusCode == "CREATED") {
        this.notif.success(
          'Success',
          res.statusCode,
          {
            timeOut: 5000,
            showProgressBar: true,
            pauseOnHover: true,
            clickToClose: true,
            maxLength: 50
          }
        )
        this.router.navigate(['../companyList'])
      }else{
        this.notif.error(
          'Error while creating',
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
      console.log("err",error)
      this.notif.error(
        'Error',
        '',
        {
          timeOut: 5000,
          showProgressBar: true,
          pauseOnHover: true,
          clickToClose: true,
          maxLength: 50
        }
      )
    })
  }}
