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
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.css']
})
export class CompanyInformationComponent implements OnInit {

  dtOptionsBranch: DataTables.Settings = {};
  dtTriggerBranch: Subject<any> = new Subject();

  dtOptionsContact: DataTables.Settings = {};
  dtTriggerContact: Subject<any> = new Subject();

  companyId: any //For Edit
  companyDetailsForm: FormGroup;
  locationList: any = [];
  contactList: any = [];
  companyDetails: any;

  constructor(private notif: NotificationsService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute, private companyService: CompanyServiceService, private fb: FormBuilder) {
    this.companyDetailsForm = this.fb.group({
      "company_name": new FormControl('', [Validators.required]),
      "company_desc": new FormControl(''),
      "company_address": new FormControl('', [Validators.required]),
      "company_address1": new FormControl('', [Validators.required]),
      "time_zone": new FormControl('', [Validators.required]),
      "company_alias": new FormControl('', [Validators.required]),

    })
  }

  get getcompanyDetailsForm() {
    return this.companyDetailsForm
  }

  ngOnInit() {
    this.route.params.subscribe(res => {
      if (res && res.id != "undefined") {
        this.companyId = res.id
      }
      console.log(this.companyId)
      if (this.companyId) {
        this.getCompanyData(this.companyId)
      } else {
        console.log("new company creation")
      }
    })
  }

  getCompanyData(companyId: any) {
    console.log("edit company data")
    this.companyService.getCompanyDetails(companyId).subscribe((res: any) => {
      if (res) {
        this.companyDetails = res.company
        if (this.companyDetails) {
          this.companyDetailsForm.get('company_name').setValue(this.companyDetails.companyName)
          this.companyDetailsForm.get('company_desc').setValue(this.companyDetails.companyDesc)
          this.companyDetailsForm.get('company_address').setValue(this.companyDetails.companyAddress)
          this.companyDetailsForm.get('time_zone').setValue(this.companyDetails.timeZone)
          this.companyDetailsForm.get('company_alias').setValue(this.companyDetails.companyAlias)
        }
        this.locationList = res.companyLocation
        this.contactList = res.companyContact
        console.log("company Details to show", this.companyDetails)
      }
    }, (error) => {
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
    })
  }


  openModalForAddEditLocation(data: any) {
    console.log("inside the modal open function")
    this.modalService.open(CompanyLocationComponent)
  }

  openModalForAddEditContact(data: any) {
    console.log("inside the modal open function")
    this.modalService.open(CompanyContactComponent)
  }

}
