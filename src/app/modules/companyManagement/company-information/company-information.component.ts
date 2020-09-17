import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router ,ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators ,FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CompanyLocationComponent } from '../company-location/company-location.component';
import { CompanyContactComponent } from '../company-contact/company-contact.component';
import { CompanyServiceService } from '../company-service.service';

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

  companyId : any //For Edit
  companyDetailsForm : FormGroup;
  locationList : any = [];
  contactList : any =[];
  companyDetails: any;

  constructor(private modalService: NgbModal, private router: Router, private route : ActivatedRoute, private companyService : CompanyServiceService, private fb : FormBuilder) {
    this.companyDetailsForm = this.fb.group({
      "company_name": new FormControl('', [Validators.required]),
      "company_desc": new FormControl(''),
      "company_address": new FormControl('', [Validators.required]),
      "time_zone": new FormControl('', [Validators.required]),
      "company_alias": new FormControl('', [Validators.required]),
      
    })
   }

   get getcompanyDetailsForm() {
    return this.companyDetailsForm
   }

  ngOnInit() {
    this.route.params.subscribe(res => {
      if(res && res.id != "undefined"){
        this.companyId = res.id
      }
      if(this.companyId){
        this.getCompanyData(this.companyId)
      }else{
        console.log("new company creation")
      }
    })
  }

  getCompanyData(companyId :any){
    console.log("edit company data")
    this.companyService.getCompanyList(companyId).subscribe((res : any) => {
      if(res.response.status == 200){
      this.companyDetails =  res.response.data.find((element :any) => {
            return element.company_id == companyId
        })

        if(this.companyDetails){
          this.companyDetailsForm.get('company_name').setValue(this.companyDetails.company_name)
          this.companyDetailsForm.get('company_desc').setValue(this.companyDetails.company_desc)
          this.companyDetailsForm.get('company_address').setValue(this.companyDetails.company_address)
          this.companyDetailsForm.get('time_zone').setValue(this.companyDetails.time_zone)
          this.companyDetailsForm.get('company_alias').setValue(this.companyDetails.company_alias)
          // this.companyDetailsForm.get('status_id').setValue(company.status_id)
        }
        this.getLocationList(companyId)
        this.getContactList(companyId)
        console.log("company Details to show", this.companyDetails)
      }
    })
  }

  getLocationList(id : any){
    this.companyService.getLocationList(id).subscribe((res : any) => {
      if(res.response.status == 200){
        this.locationList = res.response.data 
        this.dtTriggerBranch.next()
      }
    })
  }

  getContactList(id : any){
    this.companyService.getContactList(id).subscribe((res : any) => {
      if(res.response.status == 200){
        this.contactList = res.response.data 
        this.dtTriggerContact.next()
      }
    })
  }

  openModalForAddEditLocation(data: any){
    console.log("inside the modal open function")
    this.modalService.open(CompanyLocationComponent)
  }

  openModalForAddEditContact(data: any){
    console.log("inside the modal open function")
    this.modalService.open(CompanyContactComponent)
  }

}
