import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TiffinmanApplicationService } from '../services/tiffinman-application.service';
import { Tiffinman } from '../shared/tiffinvala';

@Component({
  selector: 'app-dabbawala-login',
  templateUrl: './dabbawala-login.component.html',
  styleUrls: ['./dabbawala-login.component.css']
})
export class DabbawalaLoginComponent implements OnInit {
  tiffinman:Tiffinman;
  applicationform: FormGroup;
  errMsg: string;
  formErrors= {
    'f_name':'',
    'm_name': '',
    'l_name': '',
    'age':'',
    'gender':'',
    'marital_status':'',
    'phone_number':'',
    'address':''
  }

  validationMessages = {
    'f_name': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'First Name cannot be more than 20 characters long.'
    },
    'm_name': {
      'required':      "Father's Name is required.",
      'minlength':     "Father's Name must be at least 2 characters long.",
      'maxlength':     "Father's Name cannot be more than 20 characters long."
    },
    'l_name': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 20 characters long.'
    },
    'age': {
      'required' : 'Age is required.',
      'min' : 'Age must be at least 5 yeras old.',
      'max' : 'Age cannot be more than 100 years old .'
    },
    'marital_status':{
      'required' : 'Marital Status is Required'
    },
    'gender':{
      'required' : 'Gender is Required'
    },
    'phone_number':{
      'required' : 'Contact Number is Required',
      'min': 'Invalid Phone Number',
      'max': 'Invalid Phone Number'
    },
    'address':{
      'required' : 'Address is Required',
      'minlength': "Address must be at least 10 characters long.",
      'maxlength': "Address cannot be more than 200 characters long."
    }
  };


  @ViewChild('apform',{static:false}) applicationformDirective;
  constructor(private fb: FormBuilder,
    private tiffinmanservice: TiffinmanApplicationService) {
      this.createForm();
    }

  ngOnInit():void {}
  
  createForm(){
    this.applicationform = this.fb.group({
      f_name: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      l_name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      m_name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      age: [,[Validators.required,Validators.min(5),Validators.max(100)]],
      gender:['',Validators.required],
      marital_status:['',Validators.required],
      phone_number:[,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]],
      address:['', [Validators.required,Validators.minLength(10), Validators.maxLength(199)]] 
    });
      this.tiffinman = this.applicationform.value;
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

  this.tiffinman = this.applicationform.value;
  // this.tiffinman.Present_member = this.tiffinman.Present_member ? 1 : 0;
  this.tiffinmanservice.submitLoginForm(this.tiffinman)
  .subscribe(
    (tiffinman) => {
      this.tiffinman = tiffinman;
      console.log(tiffinman);
    },
    (error) => {
      this.errMsg = error;
    }
  )
  this.applicationform.reset({
      f_name: '',
      m_name: '',
      l_name: '',
      age: 0,
      gender:'',
      marital_status:'',
      phone_number:0
  });
  this.applicationformDirective.resetForm();
}

}
