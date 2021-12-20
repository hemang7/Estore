import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { LoginregisterServiceService } from '../loginregister-service.service';
import { Rest2Service } from '../user-display/rest2.service';

@Component({
  selector: 'app-forgot-pwd',
  templateUrl: './forgot-pwd.component.html',
  styleUrls: ['./forgot-pwd.component.css']
})
export class ForgotPwdComponent implements OnInit {


  public forgetForm!:FormGroup;
  public otpForm!:FormGroup;

  constructor(private formBuilder:FormBuilder,private restService:Rest2Service, private LoginregisterService:LoginregisterServiceService) { }

  ngOnInit(): void {
  

  this.forgetForm=this.formBuilder.group({

    email :['',[Validators.required,Validators.email]],
    
  }),
  this.otpForm=this.formBuilder.group({
    email :['',[Validators.required,Validators.email]],
    otp:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.email]],
    Cpassword :['',[Validators.required,Validators.email]],
  })
}
isforget=true;
isotp=false;
otp:any;
email:any;
sendmail1(){
  
  this.LoginregisterService.SendOTP({email:this.forgetForm.value.email}).subscribe 
    ( 
      
      (data) => 
      {
        data = JSON.parse(data);
        alert(data.message);
        // console.log("otp sent");
        if(data.flag==true){
          this.otp=data.otp;
          this.email=data.email;
          console.log("Otp"+this.otp+"email"+this.email);
          this.isforget=false;
          this.isotp=true;
        }
      }, 
      (error) => 
      {
        alert(JSON.parse(error));
        console.log("otp send failed" + error.getMessage);
      }
  );
}

verifyotp(){
  // this.submitted = true;
  let email= this.otpForm.value.email
  let otp = this.otpForm.value.otp;
  console.log(email,otp);
  // let Password = this.otpForm.value.Password;
  var userObj = {
    "email" : this.otpForm.value.email,
    "password" : this.otpForm.value.password
  }
  // if(this.otpForm.invalid){
  //   alert("fill all details pls");
  //   return;
  // }
  // else{
    if(otp==this.otp && email==this.email){
      this.LoginregisterService.UpdatePassword(userObj).subscribe 
      ( 
        (data) => 
        {
          alert(JSON.parse(data).message);
          console.log("password updated");
          
          // this.router.navigate(['/login']);
        }, 
        (error) => 
        {
          alert(JSON.parse(error));
          console.log("password reset failed" + error.getMessage);
        }
      );
    }
    else{
      if(this.email!=email)
        alert("Invalid mail");
      else
        alert("Invalid OTP");
     
    }   
}

}
