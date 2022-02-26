import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';
import { MainService } from '../main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courseregister',
  templateUrl: './courseregister.component.html',
  styleUrls: ['./courseregister.component.css']
})
export class CourseregisterComponent implements OnInit {
  courseForm:FormGroup;

  constructor(private _add:MainService,private fb:FormBuilder,private router:Router) { 
    this.courseForm = this.fb.group({
      yourname :['',[Validators.required,]],
      coursename :['',[ Validators.required,Validators.minLength(8),Validators.maxLength(40)]],
      coursedecs:['',[Validators.required,Validators.minLength(20),Validators.maxLength(200)]],
      duration:['',[Validators.required]],
      fee:['',[Validators.required,Validators.pattern(/[0-9]/)]],
      seats:40,
      checkseats:[false, Validators.requiredTrue],
      check : [false, Validators.requiredTrue]
    });
  }
  professor_data:any;
  id:any;
  ngOnInit(): void {
    this.id = localStorage.getItem('UserId');
    this._add.getprofiledata(this.id)
    .subscribe((data)=>{
      console.log(data)
      this.professor_data=data;
    })
  }
  addcourse(){
    console.log(this.courseForm.value)
    this._add.addcourse(this.courseForm.value,this.id)
    .subscribe((data)=>{
      alert('Course added');
    })
    this.router.navigate(['/professorhome']);
  }
}
