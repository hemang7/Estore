import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Rest2Service {
  getUserById(searchId: any): any {
    throw new Error('Method not implemented.');
  }

  constructor(private _https:HttpClient) { }

  createUser(user:any) {
    return this._https.post("http://localhost:3000/users", user);
  }

  getAllUser() {
    return this._https.get("http://localhost:8002/getAllUsers")
  }

  signupUser(man:any){
    return this._https.post("http://localhost:8002/addUser",man)
  }

  getAllProduct() {
    return this._https.get("http://localhost:8002/getProducts")
  }

  forgetpassword(email:any,):Observable<any>{
    alert(email);
    return this._https.get("http://localhost:8002/getUserByEmail/"+email,{ headers: { 'content-type': 'application/json' }, responseType: 'text' })
  }
}
