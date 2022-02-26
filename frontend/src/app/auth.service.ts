import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  professorloggedIn(){
    var role = localStorage.getItem('role');
    if(role==='professor')
    {
      return true
    }
    else{
      return false
    }
  }
  studentloggedIn(){
    var role = localStorage.getItem('role');
    if(role==='student')
    {
      return true
    }
    else{
      return false
    }
  }
  getrole(){
    return localStorage.getItem('role')
  }
  getToken()
  {
    return localStorage.getItem('token')
  }
}
