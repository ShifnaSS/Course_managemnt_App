import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../main.service';

@Component({
  selector: 'app-appstatus',
  templateUrl: './appstatus.component.html',
  styleUrls: ['./appstatus.component.css']
})
export class AppstatusComponent implements OnInit {

  constructor(private _add:MainService,private router:Router) { }
  Applications:any
  Courses:any
  ngOnInit(): void {
    var id = localStorage.getItem('UserId');
    this._add.getstatus(id)
    .subscribe((applications)=>{
      this.Applications = applications;
      console.log(this.Applications)
   
      console.log(this.Applications)
      })
  }

}
