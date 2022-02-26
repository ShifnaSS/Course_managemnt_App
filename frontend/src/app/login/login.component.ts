import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private router:Router,private _add:LoginService,private fb:FormBuilder) {
    this.loginForm = this.fb.group({
      username : ['',[Validators.required]],
      password : ['',[Validators.required]],
      check :[false, Validators.requiredTrue]
    })
   }
   error_label:any
  ngOnInit(): void {
  }
login(){
  console.log(JSON.stringify(this.loginForm.value));
  var logindata = this.loginForm.value;
  this._add.checklogin(logindata)
  .subscribe((res)=>{
    console.log(res)
    if(res!=null){
      console.log("login Success");
      var role = res.obj.role;
      var userid = res.obj._id;
      localStorage.setItem('UserId',userid);
      localStorage.setItem('role',role);
      localStorage.setItem('token',res.token);
      console.log("Role of the signup person",role);
      if(role == "professor")
      {  
        this.router.navigate(['/professorhome']);
      }
      if(role == "student"){
        this.router.navigate(['/homeprofile']);
      }
    }
    
    else{
      console.log("login failed");
      this.error_label = "Invalid Login ID or password";
    }
    // alert("login successfull")
  })
}
}
