import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyServiceService } from '../company-service.service';
import { Subject } from 'rxjs';
import { Router ,ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  companyList : any = [];

  constructor(private companyService : CompanyServiceService, private router: Router, private route : ActivatedRoute ) { }
  

  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any> = new Subject();

  
  ngOnInit() {
    
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };

    this.getCompanyList()
  }

  public getCompanyList(){
    this.companyService.getCompanyList("").subscribe((response : any) => {
      console.log("companylist", response.response.data)
      this.companyList = response.response.data;
      this.dtTrigger.next();
    })
  }

  public goToCompanyInformation(companyDetails: any){

    if(companyDetails){
      companyDetails = companyDetails.company_id  
    }
    console.log("this.route",this.route, companyDetails)
    this.router.navigate(['../companyInfo/' + companyDetails ],{relativeTo: this.route})
  }

}
