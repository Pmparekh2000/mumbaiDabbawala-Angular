import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../shared/customer';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ProcessHttpMsgServiceService } from './process-http-msg-service.service';
import { baseURL } from '../shared/baseUrl';
import { CustomerLogin } from '../login-page/login-page.component';

@Injectable({
  providedIn: 'root'
})

export class UserLoginServiceService {

  private customerData:Customer;
  private exist:boolean = false;

  constructor(private http: HttpClient, private processHttpMsgService: ProcessHttpMsgServiceService) { }
  private httpOptions = {
    headers : new HttpHeaders(
      {'Content-Type': 'application/json'}
  )};
  submitLoginForm(customer:Customer): Observable<Customer>{
    return this.http.post<Customer>(baseURL + 'customer',customer,this.httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleErrors));
  }

  customerLogin(customerlogin:CustomerLogin): Observable<CustomerLogin>{
    return this.http.post<CustomerLogin>(baseURL + 'customervalidate',customerlogin ,this.httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleErrors));
  }

  setData(customerData){
    this.customerData = customerData;
    this.exist = true;
  }
  checkData(){
    return this.exist;
  }
  getData(){
    return this.customerData[0];
  }
  logout(){
    this.exist = false;
    this.customerData = null;
  }
  putData(customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(baseURL + 'customerupdate',customer,this.httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleErrors));
  }
}
