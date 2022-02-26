import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-studentapp',
  templateUrl: './studentapp.component.html',
  styleUrls: ['./studentapp.component.css']
})
export class StudentappComponent implements OnInit {

  constructor(private _add:MainService,private router:Router) { }
  userid:any
  studentDatas:any
  StudentDatas:any
  ngOnInit(): void {
    this.userid = localStorage.getItem('UserId');
    this._add.getdetails(this.userid)
    .subscribe((studentdata)=>{
      console.log(studentdata)
        this.studentDatas = studentdata;
    })
    this._add.getstatusdetails(this.userid)
        .subscribe((data)=>{
          console.log(data)
          this.StudentDatas = data;
        })
  }

}
