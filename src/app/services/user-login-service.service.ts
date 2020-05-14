import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Customer } from '../shared/customer';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ProcessHttpMsgServiceService } from './process-http-msg-service.service';
import { baseURL } from '../shared/baseUrl';
@Injectable({
  providedIn: 'root'
})
export class UserLoginServiceService {

constructor(private http: HttpClient, private processHttpMsgService: ProcessHttpMsgServiceService) { }
  submitLoginForm(customer:Customer): Observable<Customer>{
    const httpOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
    )};
        // console.log(customer);
    return this.http.post<Customer>(baseURL + 'customer',customer,httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleErrors));
  }
}
