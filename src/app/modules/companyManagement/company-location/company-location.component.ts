import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyServiceService } from '../company-service.service';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
@Component({
  selector: 'app-company-location',
  templateUrl: './company-location.component.html',
  styleUrls: ['./company-location.component.css']
})
export class CompanyLocationComponent implements OnInit {
  locationForm: FormGroup;
  parentcomapny: any
  state: any
  city: any
  stateDeatil: any
  cityDetail: any
  constructor(public activeModal: NgbActiveModal, private companyservice: CompanyServiceService,
    private notif :NotificationsService,
    private router:Router) {
    this.locationForm = new FormGroup({
      locationName: new FormControl('', [Validators.required]),
      locationAddress: new FormControl('', [Validators.required]),
      locationAddress1: new FormControl('', [Validators.required]),
      locationDes: new FormControl('', [Validators.required]),
      stateId :new FormControl('',[Validators.required]),
      cityId :new FormControl('',[Validators.required]),

    });
  }

  ngOnInit() {
    this.parentcomapny = localStorage.getItem('companyName')
    this.companyservice.getState().subscribe((res) => {
      this.state = res.response
    })
  }
  onChangeState(state: any) {
    console.log(state)
    this.stateDeatil = state.split(",")
    this.locationForm.value.stateId = this.stateDeatil[0]
    this.locationForm.value.stateName = this.stateDeatil[1]
    this.companyservice.getcity(this.locationForm.value.stateId).subscribe((res) => {
    this.city=res.response
    })
  }
  passBack() {
    this.activeModal.close()
  }
  onChangeCity(city: any) {
    this.cityDetail = city.split(",")
  }
  save() {
    this.locationForm.value.stateId = this.stateDeatil[0]
    this.locationForm.value.stateName = this.stateDeatil[1]
    this.locationForm.value.cityId = this.cityDetail[0]
    this.locationForm.value.cityName = this.cityDetail[1]
    let reqbody={
      "address1": this.locationForm.value.locationAddress,
      "address2": this.locationForm.value.locationAddress1,
      "branchDesc": this.locationForm.value.locationDes,
      "branchId": "null",
      "branchName": this.locationForm.value.locationName,
      "cityId": this.locationForm.value.cityId,   
      "companyId": "1234", 
      "stateId": "CAL", 
      "userId": "string"
    }

    this.companyservice.createBranch(reqbody).subscribe((res) => {
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
  }
}
