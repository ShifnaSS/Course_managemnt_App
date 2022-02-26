import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  constructor(private _add:MainService,private router:Router) { }
  Applications:any
  Courses:any
  acceptt:any
  rejectt:any

  ngOnInit(): void {
    var id = localStorage.getItem('UserId');
    this._add.getapplications(id)
    .subscribe((applications)=>{
      this.Applications = applications;
      console.log(this.Applications)
   
      console.log(this.Applications)
      })
  }
  checkseats(courseid:any){
    this._add.getCourses(courseid)
    .subscribe((courses)=>{
      this.Courses = courses;
      
      console.log(this.Courses.seats)
      if(this.Courses.seats==0){
        alert('seats full');
    
      }
      else{
        alert('seats available');
      }
    })
  }
  accept(courseid:any,userid:any){
    this._add.getCourses(courseid)
    .subscribe((cours)=>{
      this.Courses = cours;
      console.log(this.Courses.seats)
      if(this.Courses.seats==0){
        alert('seats full');
      }
      else{
        var seatscount = this.Courses.seats - 1;
        this._add.acceptstatus(courseid,userid,seatscount)
        .subscribe((data)=>{
        alert('Application accepted');
        this.Courses = this.Courses.filter((p: any) => p !== userid);
      })
      }
    })
    
    }
    
  reject(userid:any){
    this._add.reject(userid)
    .subscribe((data)=>{
      alert("Application Rejected")
      this.Courses = this.Courses.filter((p: any) => p !== userid);
    })
  }
}
