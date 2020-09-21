import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http' // old
// import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  api_url:string=environment.apiserverendpoint
  constructor(private http:HttpClient) { }

   login(resobj):Observable<any>{
     return this.http.post(this.api_url+'/user/userDetails',resobj)
   }
}
