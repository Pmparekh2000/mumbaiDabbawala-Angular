import { DataService } from './../shared/data.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { custObject } from "../shared/custObject";
 
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  @Input() item: custObject;

  f_no: string;
  r_name: string;
  a_name: string;
  l_name: string;
  rly_stat: string;
  city: string;
  pincode: string;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    // this.putCustData();
  }

  putCustData(){
    this.item = new custObject(this.f_no, this.r_name,this.a_name,this.l_name,this.rly_stat,this.city,this.pincode);
    this.dataService.putCustData(this.item);
    // console.log(this.item);
  }

  // custName = new FormGroup({
  //   "fname": new FormControl('', [Validators.required]),
  //   mname: new FormControl(''),
  //   lname: new FormControl('')
  // });

  custAddPickUp = new FormGroup({
    flat_no: new FormControl(''),
    resi_name: new FormControl(''),
    area: new FormControl(''),
    landmark: new FormControl(''),
    nearby_rly_stat: new FormControl(''),
    city: new FormControl(''),
    pincode: new FormControl('')
  });

  // custAddDrop = new FormGroup({
  //   table_no: new FormControl(''),
  //   build_name: new FormControl(''),
  //   area: new FormControl(''),
  //   landmark: new FormControl(''),
  //   nearby_rly_stat: new FormControl(''),
  //   city: new FormControl(''),
  //   pincode: new FormControl('')
  // });

  // custCtcNo = new FormGroup({
  //   mob1: new FormControl(''),
  //   mob2: new FormControl(''),
  //   landline: new FormControl('')
  // });


}
