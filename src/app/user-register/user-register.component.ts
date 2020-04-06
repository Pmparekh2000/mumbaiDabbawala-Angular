import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  custName = new FormGroup({
    "fname": new FormControl('', [Validators.required]),
    mname: new FormControl(''),
    lname: new FormControl('')
  });

  custAddPickUp = new FormGroup({
    flat_no: new FormControl(''),
    resi_name: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    nearby_rly_stat: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl('')
  });

  custAddDrop = new FormGroup({
    table_no: new FormControl(''),
    build_name: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    nearby_rly_stat: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl('')
  });

  custCtcNo = new FormGroup({
    mob1: new FormControl(''),
    mob2: new FormControl(''),
    landline: new FormControl('')
  });

}
