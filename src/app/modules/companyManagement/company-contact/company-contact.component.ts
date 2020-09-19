import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { CompanyServiceService } from '../company-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-contact',
  templateUrl: './company-contact.component.html',
  styleUrls: ['./company-contact.component.css']
})
export class CompanyContactComponent implements OnInit {
  contactForm: FormGroup;
  parentcomapny: any
  locationarr:any
  constructor(private activeModal : NgbActiveModal,private companyservice: CompanyServiceService) {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      emailAddress: new FormControl('', [Validators.required]),
      primaryContact: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      org: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
    });
   }

  ngOnInit() {
    this.parentcomapny=localStorage.getItem('companyName')   
   this.companyservice.getLocation().subscribe((res)=>{
      this.locationarr = res.response
    })
  }
 Save(){
   console.log(this.contactForm.value)
 }
}
