// import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-dabbawala-register',
  templateUrl: './dabbawala-register.component.html',
  styleUrls: ['./dabbawala-register.component.css']
})
export class DabbawalaRegisterComponent implements OnInit {

  constructor(private fb:FormBuilder){}

  ngOnInit() {
  }

  get AddNum(){
    return this.registrationForm.get('add_no');
  }
  //Method 1 for form groups and form control
  registrationForm = this.fb.group({
    //The first element in the array is the default for the form-control
    add_no: ['', [Validators.required, Validators.minLength(3)]],
    add_name: [''],
    add_name_divi: this.fb.group({
      fname: [''],
      mname: [''],
      lname: ['']
    })
  });
  //Method 2 form groups and form control
  // registrationForm = new FormGroup({
  //   add_no: new FormControl('123456789000'),
  //   add_name: new FormControl(''),
  //   add_name_divi: new FormControl({
  //     fname: new FormControl(''),
  //     mname: new FormControl(''),
  //     lname: new FormControl('')
  //   }),
  //   add_email: new FormControl('')
  // })
}
