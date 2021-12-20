import { Component, OnInit } from '@angular/core';
import { Rest2Service } from './rest2.service';
import { HttpClient } from '@angular/common/http';

interface signUpusers {
  id: number,
  name:string,
  email:string,
  pwd:any
}

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {


  constructor(private restService:Rest2Service, private _https:HttpClient) { }

  allUser:any;

  term: any
  searchName: any
  sign : signUpusers[] | any


  ngOnInit(): void {
    this.getLatestUser();

  }

 getLatestUser() {
   this.restService.getAllUser().subscribe((response)=> {
     this.sign = response
   })
 }

 


  


}
