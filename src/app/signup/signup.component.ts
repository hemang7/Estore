import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rest2Service } from '../user-display/rest2.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  allUser: any
  signupObj = {
    name:'',
    email:'',
    password:''
  }

  constructor(private restService: Rest2Service, private router: Router) { }

  ngOnInit(): void {
    
  }

  addSignup(signObj:any){
    console.log(signObj.name);
    this.restService.signupUser(signObj).subscribe((response)=> {
      this.signupObj.name = ''
      this.signupObj.email = ''
      this.signupObj.password = ''
    alert("Registration Successfull!")
    this.router.navigate(['userlogin']);
    }, err=> {
      alert("Something went wrong.")
    })
  }


}
