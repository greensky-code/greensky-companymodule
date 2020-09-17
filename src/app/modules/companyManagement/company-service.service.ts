import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http'
import { Observable } from 'rxjs';

@Injectable()
export class CompanyServiceService {

  constructor(private http:HttpClient) { }

  getCompanyList(object : any) : Observable<any> {
    return this.http.get('/assets/json/companyList.json')
  }

  getCompanyDetails(id : any) : Observable<any> {
    return this.http.get('/assets/json/companyDetailsList.json')
  }

  getLocationList(id: any): Observable<any> {
    return this.http.get('/assets/json/locationList.json')
  }

  getContactList(id: any): Observable<any> {
    return this.http.get('/assets/json/contact.json')
  }

}
