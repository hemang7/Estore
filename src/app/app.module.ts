import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Home2Component } from './home2/home2.component';
import { About2Component } from './about2/about2.component';
import { Contact2Component } from './contact2/contact2.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { Product2Component } from './product2/product2.component';
import { NoPageFound2Component } from './no-page-found2/no-page-found2.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { ForgotPwdComponent } from './forgot-pwd/forgot-pwd.component';

@NgModule({
  declarations: [
    AppComponent,
    Home2Component,
    About2Component,
    Contact2Component,
    UserDisplayComponent,
    Product2Component,
    NoPageFound2Component,
    UserLoginComponent,
    SignupComponent,
    CartComponent,
    CheckoutComponent,
    OrderConfirmComponent,
    ForgotPwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
