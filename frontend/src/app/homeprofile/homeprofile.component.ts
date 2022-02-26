import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-homeprofile',
  templateUrl: './homeprofile.component.html',
  styleUrls: ['./homeprofile.component.css']
})
export class HomeprofileComponent implements OnInit {

  constructor(private _add:MainService,private  router:Router) { }
  userid:any
  userData:any
  ngOnInit(): void {
    
    this.userid = localStorage.getItem('UserId');
    this._add.getdetails(this.userid)
    .subscribe((studentdata)=>{
      if(studentdata!=null){
        this.router.navigate(['/studentapp'])
        console.log(studentdata);
      }
    })
    this._add.getuserdata(this.userid)
    .subscribe((signupdata)=>{ 
      console.log("Signup Data",signupdata)
      this.userData = signupdata;
    })
  }

}
