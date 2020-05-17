import { Component, OnInit } from '@angular/core';
import { TiffinmanApplicationService } from '../services/tiffinman-application.service';
import { Router } from '@angular/router';
import { Customer } from '../shared/customer';
export class CustomerData{
  f_name:string;
  l_name:string;
  address:string;
  phone_number:string;
}
@Component({
  selector: 'app-login-tiffinman',
  templateUrl: './login-tiffinman.component.html',
  styleUrls: ['./login-tiffinman.component.css']
})
export class LoginTiffinmanComponent implements OnInit {
  private Customers:CustomerData[] ;

  constructor(private tiffinmanservice:TiffinmanApplicationService,
              private router:Router) {
  if(!this.tiffinmanservice.checkData()){
    this.router.navigate(['/notfound']);
    // console.log(this.tiffinmanservice.checkData())

  }else{
    this.Customers = this.tiffinmanservice.getData();
  }
   }

  ngOnInit() {
    if(!this.tiffinmanservice.checkData()){
      console.log(this.tiffinmanservice.checkData())
    }
  }

}
