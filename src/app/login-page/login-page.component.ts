import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TiffinmanApplicationService } from '../services/tiffinman-application.service';
import { Router } from '@angular/router';
export class TiffinmanLogin{
  phone_number:string;
  password:string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  tiffinmanLogin:TiffinmanLogin;
  tiffinmanloginformgroup:FormGroup;
  errMsg:string;
  tiffinmanformErrors= {
    'phone_number':'',
    'password':''
  }
  tiffinmanValidationMessages ={
    'phone_number':{
      'required' : 'Contact Number is Required',
      'minlength': 'Invalid Phone Number',
      'maxlength': 'Invalid Phone Number',
      'pattern':'Only numbers'
    },
    'password': {
      'required':      "Passsword is required.",
      'minlength':     "Password must be at least 10 characters long."
    }

  }
  @ViewChild('tiffinmanlogin',{static:false}) tiffinmanLoginFormDirective;
  constructor(private fb:FormBuilder,
              private tiffinmanservice:TiffinmanApplicationService,
              private router:Router
              ) {
                this.tiffincreateForm();
               }

  ngOnInit() {
  }
  tiffincreateForm(){
    this.tiffinmanloginformgroup = this.fb.group({
      phone_number:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      password:['',[Validators.required,Validators.minLength(10)]]
    });
      this.tiffinmanLogin= this.tiffinmanloginformgroup.value;
      // console.log(this.tiffinmanLogin)
      // console.log(this.tiffinmanloginformgroup.value)
      this.tiffinmanloginformgroup.valueChanges.subscribe(data => this.onValueChanged());
      this.onValueChanged(); // reset Validation Changes
}

onValueChanged(data?: any) {
  if (!this.tiffinmanloginformgroup) { return; }
  const form = this.tiffinmanloginformgroup;
  for (const field in this.tiffinmanformErrors) {
    if (this.tiffinmanformErrors.hasOwnProperty(field)) {
      // clear previous error message (if any)
      this.tiffinmanformErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.tiffinmanValidationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.tiffinmanformErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}

onTiffinmanSubmit(){

  this.tiffinmanLogin = this.tiffinmanloginformgroup.value;
  // this.tiffinman.Present_member = this.tiffinman.Present_member ? 1 : 0;
  console.log(this.tiffinmanLogin)
  this.tiffinmanservice.tiffinmanLogin(this.tiffinmanLogin)
  .subscribe({
    next: (tiffinmanLogin) => {

      this.tiffinmanservice.setData(tiffinmanLogin);
      this.router.navigate(['/tiffinman']);
    },
    error: (error) => {
      this.errMsg = error;
      console.log("the error occured ")
    },
    complete:() =>{
      console.log('Subscription completed')
    }

  })
  this.tiffinmanloginformgroup.reset({
    phone_number:'',
    password:''
  });
  this.tiffinmanLoginFormDirective.resetForm();
}


}
