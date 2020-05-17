import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginServiceService } from '../services/user-login-service.service';
import { Customer } from '../shared/customer';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  customer: Customer;
  applicationform: FormGroup;
  errMsg: string;
  formErrors= {
    'f_name':'',
    'l_name': '',
    'm_name': '',
    'email':'',
    'password':'',
    'age':'',
    'occupation':'',
    'marital_status':'',
    'gender':'',
    'address':'',
    'pincode':'',
    'phone_number':''
  }

  validationMessages = {
    'f_name': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'First Name cannot be more than 20 characters long.'
    },
    'l_name': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 20 characters long.'
    },
    'm_name': {
      'required':      "Father's Name is required.",
      'minlength':     "Father's Name must be at least 2 characters long.",
      'maxlength':     "Father's Name cannot be more than 20 characters long."
    },

    'email': {
      'required':      'Email is required.',
      'maxlength':     'Last Name cannot be more than 199 characters long.',
      'email':         'Email not in valid format.'
    },
    'password': {
      'required':      "Passsword is required.",
      'minlength':     "Password must be at least 10 characters long."
    },
    'age': {
      'required' : 'Age is required.',
      'min' : 'Age must be at least 5 yeras old.',
      'max' : 'Age cannot be more than 100 years old .'
    },
    'occupation':{
      'maxlength': 'Occupation cannot be more than 99 characters long.'
    },
    'marital_status':{
      'required' : 'Marital Status is Required'
    },
    'gender':{
      'required' : 'Gender is Required'
    },
    'address':{
      'required' : 'Address is Required',
      'minlength': "Address must be at least 10 characters long.",
      'maxlength': "Address cannot be more than 200 characters long."
    },
    'pincode':{
      'required' : 'Pincode is Required',
      'minlength': "Pincode must be of 6 digits",
      'maxlength': "Pincode must be of 6 digits"
    },
    'phone_number':{
      'required' : 'Contact Number is Required',
      'min': 'Invalid Phone Number',
      'max': 'Invalid Phone Number'
    }
  };

  @ViewChild('apform',{static:false}) applicationformDirective;

  constructor(private fb: FormBuilder,
              private loginservice: UserLoginServiceService) {
                this.createForm();
              }

  ngOnInit():void {}

  createForm(){
    this.applicationform = this.fb.group({
      f_name: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      l_name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      m_name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['',[Validators.required,Validators.maxLength(199), Validators.email]],
      password:['',[Validators.required,Validators.minLength(10)]],
      age: [,[Validators.required,Validators.min(5),Validators.max(100)]],
      occupation:['',Validators.maxLength(99)],
      marital_status:['',Validators.required],
      gender:['',Validators.required],
      address:['', [Validators.required,Validators.minLength(10), Validators.maxLength(199)]],
      pincode:[,[Validators.required,,Validators.minLength(6),Validators.maxLength(6)]],
      phone_number:[,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
      Present_member:false
    });
      this.customer = this.applicationform.value;
      this.applicationform.valueChanges.subscribe(data => this.onValueChanged());
      this.onValueChanged(); // reset Validation Changes
}

onValueChanged(data?: any) {
  if (!this.applicationform) { return; }
  const form = this.applicationform;
  for (const field in this.formErrors) {
    if (this.formErrors.hasOwnProperty(field)) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if (control.errors.hasOwnProperty(key)) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }
}

onSubmit(){

  this.customer = this.applicationform.value;
  this.customer.Present_member = this.customer.Present_member ? 1 : 0;
  this.loginservice.submitLoginForm(this.customer)
  .subscribe(
    (customer) => {
      this.customer = customer;
      console.log(customer);
    },
    (error) => {
      this.errMsg = error;
    }
  )
  this.applicationform.reset({
      f_name: '',
      l_name: '',
      m_name: '',
      email: '',
      password:'',
      age: 0,
      occupation:'',
      marital_status:'',
      gender:'',
      address:'',
      pincode:'',
      phone_number:0,
      Present_member:0
  });
  this.applicationformDirective.resetForm();
}
}
