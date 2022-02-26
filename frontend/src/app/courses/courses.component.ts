import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
proid:any
  constructor(private _add:MainService,private router:Router) { }
  Courses:any
  ngOnInit(): void {
    this._add.getAllCourses()
    .subscribe((courses)=>{
      this.Courses = courses;
      console.log("courses are"+this.Courses)
    })
  }
  apply(_id:any,proid:any){
    localStorage.setItem('courseid',_id);
    localStorage.setItem('proid',proid);
    this.router.navigate(['/studentregister'])
  }

}
