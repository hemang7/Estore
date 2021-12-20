import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { About2Component } from './about2/about2.component';
import { Contact2Component } from './contact2/contact2.component';
import { Home2Component } from './home2/home2.component';
import { Product2Component } from './product2/product2.component';
import { NoPageFound2Component } from './no-page-found2/no-page-found2.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuardService } from './auth-guard.service';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';



const routes2: Routes = [
  {path:'',redirectTo:"home2",pathMatch:'full'},
  {path:'home2', component:Home2Component},
  {path:'about2', component: About2Component},
  {path:'contact2', component:Contact2Component},
  {path:'product2', component:Product2Component, canActivate:[AuthGuardService]},
  {path:'userlogin', component:UserLoginComponent},
  {path:'userdisplay', component:UserDisplayComponent, canActivate:[AuthGuardService]},
  {path:'signup', component:SignupComponent},
  {path:'cart', component:CartComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'orderConfirm', component:OrderConfirmComponent},
  {path:'forget',component:ForgotPwdComponent},
  {path:'**', component:NoPageFound2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes2)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
