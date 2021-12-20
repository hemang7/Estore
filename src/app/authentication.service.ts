import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public show !: boolean;


  constructor() { }

  varIsLoggedIn="isLoggedIn";

  currentUser !: number; 
  
  login() {
    localStorage.setItem(this.varIsLoggedIn, 'true');
  }

  logout() {
    localStorage.setItem(this.varIsLoggedIn, 'false');
  
  }
}
