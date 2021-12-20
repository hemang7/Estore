import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginregisterServiceService {

  constructor(private http:HttpClient) { }

  URL="http://localhost:8002";

  SendOTP (email : any) : Observable<any> { 
    var URL = this.URL + "/forgetpass"; 
    let header ={'content-type' : 'application/json'};
    console.log(URL); 
    console.log ("otp to be sent on email : "+email); 
    return this.http.post(URL, email, {'headers' : header , responseType : 'text'}); 
  }
  UpdatePassword  (passwordObj : any) : Observable<any> { 
    console.log(passwordObj);
    var URL = this.URL+ "/updatepass"; 
    let header ={'content-type' : 'application/json'}; 
    console.log ("Data to be updated in the  user db : "+JSON.stringify(passwordObj)); 
    return this.http.put(URL, passwordObj, {'headers' : header , responseType : 'text'}); 
  }

}
