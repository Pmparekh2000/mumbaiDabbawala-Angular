import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public URL = "http://localhost:8000/";
  constructor(private http:HttpClient) { }

  fetchCust(){
    return this.http.get(this.URL+"api/CustAddrPicList");
  }
}
