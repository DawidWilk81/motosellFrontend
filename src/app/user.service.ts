import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseurl = "https://motosellapp.herokuapp.com/";

registerUser(userData:any): Observable<any> {
  return this.http.post(this.baseurl + 'api/users/', userData)
}

loginUser(userData:any): Observable<any> {
  return this.http.post(this.baseurl + 'api/auth/', userData)
}


}
