import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  constructor(private _add:MainService) { }
  MyCourses:any
  ngOnInit(): void {
      var id = localStorage.getItem('UserId')
      this._add.mycourses(id)
      .subscribe((data)=>{
        if(data){
          this.MyCourses=data; 
          console.log(this.MyCourses) 
        }
      })
  }

}
