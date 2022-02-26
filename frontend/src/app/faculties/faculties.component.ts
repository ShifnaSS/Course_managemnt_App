import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  constructor(private _add:MainService) { }
professors:any
  ngOnInit(): void {
    this._add.getprof()
    .subscribe((data)=>{
      this.professors = data;
      console.log(this.professors);
    })
  }

}
