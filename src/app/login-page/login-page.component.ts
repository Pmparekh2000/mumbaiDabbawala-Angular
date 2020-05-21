import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TiffinmanApplicationService } from '../services/tiffinman-application.service';
import { Router } from '@angular/router';
import { UserLoginServiceService } from '../services/user-login-service.service';
export class TiffinmanLogin{
  phone_number:string;
  password:string;
}
export class CustomerLogin{
  email:string;
  password:string;
}
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  tiffinmanLogin:TiffinmanLogin;
  customerLogin:CustomerLogin;

  tiffinmanloginformgroup:FormGroup;
  customerloginformgroup:FormGroup;

  tiffinmanerrMsg:string;
  customererrMsg:string;
  tiffinmanformErrors= {
    'phone_number':'',
    'password':''
  }

  customerformErrors= {
    'email':'',
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
  customerValidationMessages ={
    'email':{
      'required' : 'Email is Required',
      'maxlength': 'Email length is too long',
      'email': 'Email is invalid'
    },
    'password': {
      'required':      "Passsword is required.",
      'minlength':     "Password must be at least 10 characters long."
    }

  }
  @ViewChild('tiffinmanlogin',{static:false}) tiffinmanLoginFormDirective;
  @ViewChild('customerlogin',{static:false}) customerLoginFormDirective;
  constructor(private fb:FormBuilder,
              private tiffinmanservice:TiffinmanApplicationService,
              private customerservice:UserLoginServiceService,
              private router:Router
              ) {
                this.tiffincreateForm();
                this.customercreateForm();
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
customercreateForm(){
  this.customerloginformgroup = this.fb.group({
    email:['',[Validators.required,Validators.maxLength(199),Validators.email]],
    password:['',[Validators.required,Validators.minLength(10)]]
  });
    this.customerLogin= this.customerloginformgroup.value;
    // console.log(this.tiffinmanLogin)
    // console.log(this.tiffinmanloginformgroup.value)
    this.customerloginformgroup.valueChanges.subscribe(data => this.onValuecChanged());
    this.onValuecChanged(); // reset Validation Changes
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
onValuecChanged(data?: any) {
  if (!this.customerloginformgroup) { return; }
  const form = this.customerloginformgroup;
  for (const field in this.customerformErrors) {
    if (this.customerformErrors.hasOwnProperty(field)) {
      // clear previous error message (if any)
      this.customerformErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.customerValidationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.customerformErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}
onTiffinmanSubmit(){

  this.tiffinmanLogin = this.tiffinmanloginformgroup.value;
  console.log(this.tiffinmanLogin)
  this.tiffinmanservice.tiffinmanLogin(this.tiffinmanLogin)
  .subscribe({
    next: (tiffinmanLogin) => {

      this.tiffinmanservice.setData(tiffinmanLogin);
      this.router.navigate(['/tiffinman']);
    },
    error: (error) => {
      this.tiffinmanerrMsg = error;
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
onCustomerSubmit(){

  this.customerLogin = this.customerloginformgroup.value;
  // console.log(this.customerLogin)
  this.customerservice.customerLogin(this.customerLogin)
  .subscribe({
    next: (customerLogin) => {
      // console.log('The response ka data is ::'+ JSON.stringify(customerLogin))
      this.customerservice.setData(customerLogin);
      this.router.navigate(['/customer']);
    },
    error: (error) => {
      this.customererrMsg = error;
      console.log("the error occured "+this.customererrMsg);
    },
    complete:() =>{
      console.log('Subscription completed')
    }

  })
  this.customerloginformgroup.reset({
    email:'',
    password:''
  });
  this.customerLoginFormDirective.resetForm();
}

}
