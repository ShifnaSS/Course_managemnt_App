import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-professorhome',
  templateUrl: './professorhome.component.html',
  styleUrls: ['./professorhome.component.css']
})
export class ProfessorhomeComponent implements OnInit {

  constructor(private _add:MainService,private router:Router) { }
  userData :any
  userid :any
  detailid:any
  userProfile:any
  MyCourses:any
  ngOnInit(): void {
    this.userid = localStorage.getItem('UserId');
    this._add.getuserdata(this.userid)
    .subscribe((signupdata)=>{ 
      console.log("Signup Data",signupdata)
      this.userData = signupdata;
    })
    this._add.getprofiledata(this.userid)
    .subscribe((data)=>{
      if(data!==null){
        this.detailid = 1;
        this.userProfile = data;
      }
    })
  }
  deleteprofessor(id:any){
    this._add.deleteprofessor(id)
    .subscribe((data)=>{
      if(data){
        alert('Profile Deleted');  
      }
    })
    window.location.reload();
  }
 
    // window.location.reload();
  
}
