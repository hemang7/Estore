import { Component } from '@angular/core';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment6dot2';
  
  showLogin !: boolean;
  

  constructor (public authenticationService: AuthenticationService, private authGuardService: AuthGuardService) {}

  logInForAuthGuard() {
    this.authenticationService.login();
    
  }

  logOutForAuthGuard(){
    this.authenticationService.logout();
    this.authenticationService.show = false
  }
}
