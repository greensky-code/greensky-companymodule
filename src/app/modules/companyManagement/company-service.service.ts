import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http'
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
environment
@Injectable()
export class CompanyServiceService {
 api_url:string=environment.apiserverendpoint
  constructor(private http:HttpClient) { }

  getCompanyList(parentId : any) : Observable<any> {
    return this.http.get(this.api_url+'/company/company-list/'+parentId)
  }

  getCompanyDetails(id : any) : Observable<any> {
    return this.http.get(this.api_url+'/company/abc/'+id)
  }
  getState():Observable<any>{
    return this.http.get(this.api_url+'/company/states')
  }

  getcity(stateId):Observable<any>{
    return this.http.get(this.api_url+'/company/cities/'+stateId)
  }
  getLocationList(id: any): Observable<any> {
    return this.http.get('/assets/json/locationList.json')
  }

  getContactList(id: any): Observable<any> {
    return this.http.get('/assets/json/contact.json')
  }

  getAssestType():Observable<any>{
    return this.http.get(this.api_url+'/asset/asset-type')
  }
  getCompany():Observable<any>{
    return this.http.get(this.api_url+'/company/companies')
  }
  getLocation():Observable<any>{
    return this.http.get(this.api_url+'/company/locations')
  }
  getAssetDetail(id):Observable<any>{
    return this.http.get(this.api_url+'/asset/asset-list/'+id)
  }
}
