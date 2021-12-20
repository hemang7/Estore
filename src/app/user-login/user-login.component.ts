import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router, private authenticationService: AuthenticationService, private authGuardService: AuthGuardService) { }
  logInForAuthGuard()
  {
    this.authenticationService.login();
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:8002/getAllUsers").subscribe(res=> {
      const user = res.find((a : any)=> {
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        this.authenticationService.currentUser = user.id;
        console.log(user);
        alert("Login Success!");
        this.authenticationService.show = true;
        this.loginForm.reset()
        this.logInForAuthGuard();
        this.router.navigate(['home2'])
        

      }else {
        alert("User not Found!");
      }
    }, err => {
      alert(err)
  
    })
  }

  

}
