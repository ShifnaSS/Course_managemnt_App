import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  addsignup(sdata:any){
    console.log("entered in signup addingservice")
    return this.http.post<any>("http://localhost:3400/addsignup",{sdata})
  }
  checklogin(logindata:any){
    console.log("entered in login checkingservice")
    return this.http.post<any>("http://localhost:3400/checklogin",{logindata})
  }

}
