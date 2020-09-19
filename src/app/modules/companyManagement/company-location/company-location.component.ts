import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CompanyServiceService } from '../company-service.service';
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
  constructor(public activeModal: NgbActiveModal, private companyservice: CompanyServiceService) {
    this.locationForm = new FormGroup({
      locationName: new FormControl('', [Validators.required]),
      locationAddress: new FormControl('', [Validators.required]),
      locationAddress1: new FormControl('', [Validators.required]),
      locationDes: new FormControl('', [Validators.required]),
      stateId: new FormControl('', [Validators.required]),
      cityId: new FormControl('', [Validators.required]),
      cityName: new FormControl('', [Validators.required]),
      stateName: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.parentcomapny = localStorage.getItem('companyName')
    this.companyservice.getState().subscribe((res) => {
      this.state = res
    })
  }
  onChangeState(state: any) {
    console.log(state)
    this.stateDeatil = state.split(",")
    this.locationForm.value.stateId = this.stateDeatil[0]
    this.locationForm.value.stateName = this.stateDeatil[1]
    this.companyservice.getcity(this.locationForm.value.stateId).subscribe((res) => {
    this.city=res
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
    console.log(this.locationForm.value)
  }
}
