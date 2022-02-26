import { Component, OnInit ,EventEmitter,Input,Output,ElementRef,Inject,PLATFORM_ID} from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
declare const window: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup
  ngTelInput: any;
  constructor(private _add:LoginService,private fb:FormBuilder,private router:Router,private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: string) {
    this.signupForm=this.fb.group({
      name:['',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/[0-9]/)]],
      email:['',[Validators.required,Validators.compose([
        Validators.pattern('^[a-zA-Z0-9.%+]+@[a-z0-9.-]+.[a-z]{2,4}')
      ])]],
      role:['',[Validators.required]],
      pass1:['',Validators.required,Validators.minLength(6),
                                    Validators.maxLength(20),
                                    Validators.maxLength(50),
                                    Validators.pattern(/[A-Z]/),
                                    Validators.pattern(/[a-z]/),
                                    Validators.pattern(/[0-9]/),
                                    Validators.pattern(/[!@#$]/)],
      pass2:['',Validators.required],
      check : [false, Validators.requiredTrue]
    },
    {
      validator: this.checkPasswords,
    })
   
   }
   checkPasswords(group: FormGroup) {
    const pass = group.controls['pass1'].value;
    const confirmPass = group.controls['pass2'].value;

    return pass === confirmPass ? null : { notSame: true };
  }
  ngOnInit(): void {
 
  }
  signup(){
    console.log(this.signupForm.value);
    var sdata = this.signupForm.value;
    this._add.addsignup(sdata)
    .subscribe((data)=>{
      console.log("Signup data added at the backend",data)
    })
    this.router.navigate(['/login']);
  }
  
}
