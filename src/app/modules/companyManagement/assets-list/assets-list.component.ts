import { Component, OnInit } from '@angular/core';
import { AssetsAddEditComponent } from '../assets-add-edit/assets-add-edit.component';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { Router, ActivatedRoute } from '@angular/router'
import { CompanyServiceService } from '../company-service.service';

@Component({
  selector: 'app-assets-list',
  templateUrl: './assets-list.component.html',
  styleUrls: ['./assets-list.component.css']
})
export class AssetsListComponent implements OnInit {
  companyId: any
  assestList: any
  constructor(private companyservice: CompanyServiceService, private modalService: NgbModal, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.companyId = localStorage.getItem('companyId')
    this.companyservice.getAssetDetail(this.companyId).subscribe((res) => {
      if (res.statusCode == "OK") {
        this.assestList = res.response
      }
    })
  }

  goToAddEditAssetPopup() {
    //this.modalService.open(AssetsAddEditComponent)
    this.router.navigate(['../addeditassest'], { relativeTo: this.route })
  }
  goToAssetsDetails(company) {
    console.log("this.route", this.route, company.assetId)
    this.router.navigate(['../addeditassest/' + company.assetId], { relativeTo: this.route })
  }
}
