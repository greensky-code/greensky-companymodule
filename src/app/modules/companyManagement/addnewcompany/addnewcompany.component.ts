import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyLocationComponent } from '../company-location/company-location.component';
import { CompanyContactComponent } from '../company-contact/company-contact.component';
import { CompanyServiceService } from '../company-service.service';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-addnewcompany',
  templateUrl: './addnewcompany.component.html',
  styleUrls: ['./addnewcompany.component.css']
})
export class AddnewcompanyComponent implements OnInit {
  companyDetailsForm: FormGroup;

  constructor(private notif: NotificationsService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute, private companyService: CompanyServiceService, private fb: FormBuilder) {
    this.companyDetailsForm = this.fb.group({
      "company_name": new FormControl('', [Validators.required]),
      "company_desc": new FormControl(''),
      "company_address": new FormControl('', [Validators.required]),
      "company_address1": new FormControl('', [Validators.required]),
      "time_zone": new FormControl('', [Validators.required]),
      "company_alias": new FormControl('', [Validators.required]),
      "status": new FormControl('', [Validators.required]),
      "companyType": new FormControl('', [Validators.required]),
      "countryId": new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    
  }
  submit() {
    console.log(this.companyDetailsForm.value)
    let parentcompany = localStorage.getItem("companyId");
    let reqbody = {
      "companyAddress1": this.companyDetailsForm.value.company_address,
      "companyAddress2": this.companyDetailsForm.value.company_address1,
      "companyAlias": this.companyDetailsForm.value.company_alias,
      "companyDesc": this.companyDetailsForm.value.company_desc,
      "companyName": this.companyDetailsForm.value.company_name,
      "companyType": this.companyDetailsForm.value.companyType,
      "countryId": this.companyDetailsForm.value.countryId,
      "parentCompany": parentcompany,
      "timeZone": this.companyDetailsForm.value.time_zone
    }
    console.log(reqbody)
    this.companyService.createcompany(reqbody).subscribe((res) => {
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
  }
}
