import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder ,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../main.service';
import { NgModule } from '@angular/core';
import { Prof } from './prof.model';
@Component({
  selector: 'app-professorregister',
  templateUrl: './professorregister.component.html',
  styleUrls: ['./professorregister.component.css']
})
export class ProfessorregisterComponent implements OnInit {
  professorForm:FormGroup
  constructor(private fb:FormBuilder,private router:Router,private _add:MainService) {
    
    this.professorForm = this.fb.group({
      Name :['',[Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)]],
      email_id :['',[
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
      qualification:['',[Validators.required]],
      stream:['',[Validators.required]],
      organisation:['',[Validators.required]],
      jobrole:['',[Validators.required]],
      prev_job:['',[Validators.required]],
      exp:['',[Validators.required]],
      check : [false, Validators.requiredTrue]
    });
   }
  //  professorForm ={
  //   Name :'',
  //   phone :'',
  //   email_id:'',
  //   qualification:'',
  //   stream:'',
  //   organisation:'',
  //   jobrole:'',
  //   prev_job:'',
  //   exp:''
  // }
   userData:any
   id:any
   userprofile:any
   editid:any;
   regitserid:any
  ngOnInit(): void {
    this.id = localStorage.getItem('UserId')
    this._add.getuserdata(this.id)
    .subscribe((signupdata)=>{
      this.userData = signupdata;
      console.log("details from backend",signupdata)
      this.editid = 0;
    })
    this._add.getprofiledata(this.id)
    .subscribe((data)=>{
      if(data!==null){
        this.editid = 1;
        this.userprofile=data;
        console.log("details from backend2",data)
      }
    })
  }
  onSubmit(){
    
    var pform=JSON.stringify(this.professorForm.value);
    this._add.addprofessor(pform,this.id)
    .subscribe((data)=>{
      console.log("added to backend",data)
      alert("submitted");
    })
    this.router.navigate(['/professorhome']);
    
    console.log("submitted"+JSON.stringify(this.professorForm.value))

  }
  onEdit()
{
  var pform=JSON.stringify(this.professorForm.value);
  var pform=JSON.stringify(this.professorForm.value);
  console.log("edit data",pform)
  this._add.editprofessor(pform,this.id,this.userprofile._id)
  .subscribe(()=>{
    console.log("data updated");
    alert("updated");
    this.router.navigate(['/professorhome']);
  })
}}
