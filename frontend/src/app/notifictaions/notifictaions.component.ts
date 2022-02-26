import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-notifictaions',
  templateUrl: './notifictaions.component.html',
  styleUrls: ['./notifictaions.component.css']
})
export class NotifictaionsComponent implements OnInit {

  constructor(private _add:MainService) { }
  acceptedapplications:any
  filtered_applications :any
  ngOnInit(): void {
  }
  show(){
    this._add.allapplications()
    .subscribe((data)=>{
      this.acceptedapplications = data;
      this.filtered_applications = this.acceptedapplications.filter((app:any)=>app.status=='Accepted');
      console.log(this.filtered_applications);
    
    })
  }
}
