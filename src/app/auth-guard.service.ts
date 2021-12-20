import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterModule, Routes, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot) {
    let bReturn = true;
    if(localStorage.getItem('isLoggedIn')=='false')
    {
    alert("Sorry you are not logged in.")
      this.router.navigate(['/home2'])
      bReturn = false;
  }

return bReturn;
  }
}
