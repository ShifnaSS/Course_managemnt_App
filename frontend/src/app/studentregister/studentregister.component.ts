import { Component, Input, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
@Component({
  selector: 'app-studentregister',
  templateUrl: './studentregister.component.html',
  styleUrls: ['./studentregister.component.css']
})
export class StudentregisterComponent implements OnInit {
  studentForm:FormGroup
  constructor(private route:Router,private _add:MainService,private fb:FormBuilder,private router:Router) {
    this.studentForm=this.fb.group({
      Name :['',[Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]],
        Email :['',[
        Validators.required,
        Validators.compose([
          Validators.pattern('^[a-zA-Z0-9.%+]+@[a-z0-9.-]+.[a-z]{2,4}')
        ])
      ]],
      phone :['',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),Validators.pattern(/[0-9]/)
      ]],
      quali:['',[Validators.required]],
      sub:['',[Validators.required]],
      perc:['',[Validators.required,Validators.pattern(/[0-9]/)]],
      year:['',[Validators.required,Validators.pattern(/[0-9]/)]],
      course:['',[Validators.required]],
      check : [false, Validators.requiredTrue]
    })
   }
   Courses:any
   StudentData:any
   userid:any
   proid:any
   courseid:any
  ngOnInit(): void {
    this.courseid = localStorage.getItem('courseid');
    this.proid = localStorage.getItem('proid');
    this._add.getCourses(this.courseid)
    .subscribe((courses)=>{
      this.Courses = courses;
      console.log(this.Courses)
    })
    this.userid = localStorage.getItem('UserId');
    this._add.getuserdata(this.userid)
    .subscribe((student)=>{ 
      console.log("Signup Data",student)
      this.StudentData = student;
    })
  }
  onSubmit(){
    console.log(this.studentForm.value)
    this._add.addstudent(this.studentForm.value,this.userid,this.proid,this.courseid)
    .subscribe(()=>{
      alert("Your Application succefully sent");
    })
    this.router.navigate(['/homeprofile']);
  }
 
}
