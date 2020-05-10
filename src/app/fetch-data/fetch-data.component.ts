import { Component, OnInit } from '@angular/core';
import { DataService } from "../shared/data.service";
// import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent implements OnInit {

  custData;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    console.log("Hello");
    
    this.dataService.fetchCust().subscribe(res=>{
      console.log("Posted data fetched", res);
      this.custData = res;
    });
  }

}
