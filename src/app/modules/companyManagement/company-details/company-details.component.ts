import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router'
import { NotificationsService } from 'angular2-notifications';


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyList: any = [];

  constructor(private notif: NotificationsService, private companyService: CompanyServiceService, private router: Router, private route: ActivatedRoute) { }


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };

    this.getCompanyList()
  }

  public getCompanyList() {
    let companyId = localStorage.getItem('companyId')
    this.dtTrigger.next();
    this.companyService.getCompanyList(companyId).subscribe((response: any) => {
      console.log("companylist", response)
      this.companyList = response;
      this.dtTrigger.next();
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

  public goToCompanyInformation(companyDetails: any) {

    if (companyDetails) {
      companyDetails = companyDetails.companyId
    }
    console.log("this.route", this.route, companyDetails)
    this.router.navigate(['../companyInfo/' + companyDetails], { relativeTo: this.route })
  }

}
