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
    // 'firstname':'',
    // 'lastname': '',
    // 'telnum': '',
    // 'email':''
  }
 
  validationMessages = {
    // 'firstname': {
    //   'required':      'First Name is required.',
    //   'minlength':     'First Name must be at least 2 characters long.',
    //   'maxlength':     'First Name cannot be more than 25 characters long.',
    //   'whitespace':    'Whitespaces are not allowed'
    // },
    // 'lastname': {
    //   'required':      'Last Name is required.',
    //   'minlength':     'Last Name must be at least 2 characters long.',
    //   'maxlength':     'Last Name cannot be more than 25 characters long.',
    //   'whitespace':    'Whitespaces are not allowed'
    // },
    // 'telnum': {
    //   'required':      'Tel. number is required.',
    //   'pattern':       'Tel. number must contain only numbers.',
    //   'whitespace':    'Whitespaces are not allowed'
    // },
    // 'email': {
    //   'required':      'Email is required.',
    //   'email':         'Email not in valid format.',
    //   'whitespace':    'Whitespaces are not allowed'
    // },
  };
  @ViewChild('apform',{static:false}) applicationformDirective;

  constructor(private fb: FormBuilder,
              private loginservice: UserLoginServiceService) {
                this.createForm();
              }

  ngOnInit():void {}

  createForm(){
    this.applicationform = this.fb.group({
      f_name: ['',[ Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      l_name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      m_name: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      email: ['',[Validators.required, Validators.email]],
      age: [,[Validators.required]],
      occupation:['',Validators.required],
      marital_status:['',Validators.required],
      gender:['',],
      address:['', Validators.required],
      pincode:[, Validators.required],
      phone_number:[,[Validators.required]],
      Present_member:0
      
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
  this.loginservice.submitLoginForm(this.customer)
  .subscribe(
    (customer) => {
      this.customer = customer;
    },
    (error) => {
      this.errMsg = error;
    }
  )
  this.applicationform.reset({
    firstname: '',
    lastname: '',
    telnum: 0,
    email: '',
    agree: false,
    contacttype:'None',
    message: ''
  });
  this.applicationformDirective.resetForm();
}


}