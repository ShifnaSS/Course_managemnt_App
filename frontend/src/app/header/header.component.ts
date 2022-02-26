import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MainService } from '../main.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private  _add:MainService,public _auth:AuthService) { }
  Courses:any
  ngOnInit(): void {
    this._add.getAllCourses()
    .subscribe((courses)=>{
      this.Courses = courses;
      console.log("courses are"+this.Courses)
    })
  }
  logout(){
    localStorage.removeItem('UserId');
    localStorage.removeItem('proid');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    localStorage.removeItem('courseid');
    this.router.navigate(['/'])
  }
  checklogin(courseid:any){
    var role = localStorage.getItem('role');
    if(role == 'student'){
      var uid = localStorage.getItem('UserId')
      if(uid == null){
        alert("Please login");
      }
      else{
        localStorage.setItem('courseid',courseid);
        this.router.navigate(['/studentregister']);
      }
    }
    else{
      alert("Students can only apply for a course");
    }
    
  }
  checkprofile(){
    var uid = localStorage.getItem('UserId')
    this._add.getprofiledata(uid)
    .subscribe((data)=>{
      if(data!==null){
       this.router.navigate(['/courseregister']);
      }
      else{
        alert('First register and complete your profile');
        this.router.navigate(['/professorregister']);
      }
    })
  }
}
