import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-assets-add-edit',
  templateUrl: './assets-add-edit.component.html',
  styleUrls: ['./assets-add-edit.component.css']
})
export class AssetsAddEditComponent implements OnInit {

  constructor(private companyservice: CompanyServiceService,private router: Router, private route: ActivatedRoute) { }
  assestTypearr: any
  companyarr: any 
  locationarr:any

  ngOnInit() {
    this.companyservice.getAssestType().subscribe((res) => {
      this.assestTypearr = res.response
    })
    this.companyservice.getCompany().subscribe((res1) => {
      this.companyarr = res1.response
      console.log(this.companyarr)
    })
    this.companyservice.getLocation().subscribe((res2) => {
      this.locationarr = res2.response
    })
  }
  close(){
    this.route.params.subscribe(res => {
      if (res&&res.id != undefined) {
        this.router.navigate(['../../assestList'], { relativeTo: this.route })
      }
      else{
        this.router.navigate(['../assestList'], { relativeTo: this.route })
      }
    })
  }
}
