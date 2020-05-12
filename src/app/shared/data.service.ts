import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { custObject } from "../shared/custObject";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  item;
  public URL = "http://localhost:8000/";
  constructor(private http:HttpClient) { }

  fetchCust(){
    return this.http.get(this.URL+"api/CustAddrPicList");
  }

  putCustData(cust: custObject):Observable<custObject>{
    // console.log(cust);
    return this.http.post<custObject>(this.URL+"AddNewCust",cust);
    
  }
}
