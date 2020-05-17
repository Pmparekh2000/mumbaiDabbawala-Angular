import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpMsgServiceService } from './process-http-msg-service.service';
import { Tiffinman } from '../shared/tiffinvala';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseUrl';
import { catchError } from 'rxjs/operators';
import { TiffinmanLogin } from '../login-page/login-page.component';
import { Customer } from '../shared/customer';
import { CustomerData } from '../login-tiffinman/login-tiffinman.component';

@Injectable({
  providedIn: 'root'
})
export class TiffinmanApplicationService {

  constructor(private http: HttpClient, private processHttpMsgService: ProcessHttpMsgServiceService) { }

  private httpOptions = {
    headers : new HttpHeaders(
      {'Content-Type': 'application/json'}
  )};

  private Tiffinmandata:CustomerData[];
  private exist:boolean = true;

  submitLoginForm(tiffinman:Tiffinman): Observable<Tiffinman>{

        // console.log(tiffinman);
    return this.http.post<Tiffinman>(baseURL + 'tiffinman',tiffinman,this.httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleErrors));
  }

  tiffinmanLogin(tiffinmanlogin:TiffinmanLogin): Observable<TiffinmanLogin>{

    return this.http.post<TiffinmanLogin>(baseURL + 'tiffinmanlogin',tiffinmanlogin,this.httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleErrors));

  }

  setData(tiffinmanData){

    this.Tiffinmandata = tiffinmanData;
    this.exist = true;
    // console.log("DataStored"+JSON.stringify(this.Tiffinmandata));
    }
  checkData(){
    return this.exist;

  }
  getData(){
    return this.Tiffinmandata;
  }
}
