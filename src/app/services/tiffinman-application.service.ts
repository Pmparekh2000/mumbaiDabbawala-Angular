import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProcessHttpMsgServiceService } from './process-http-msg-service.service';
import { Tiffinman } from '../shared/tiffinvala';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseUrl';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TiffinmanApplicationService {

  constructor(private http: HttpClient, private processHttpMsgService: ProcessHttpMsgServiceService) { }
  submitLoginForm(tiffinman:Tiffinman): Observable<Tiffinman>{
    const httpOptions = {
      headers : new HttpHeaders(
        {'Content-Type': 'application/json'}
    )};
        // console.log(tiffinman);
    return this.http.post<Tiffinman>(baseURL + 'tiffinman',tiffinman,httpOptions)
    .pipe(catchError(this.processHttpMsgService.handleErrors));
  }
}
