import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.css']
})
export class OrderConfirmComponent implements OnInit {

  constructor(public cartService: CartService) { }

  public grand !: number;

  // public today = new Date(new Date().getTime()+(7*24*60*60*1000));

  public nowDate = new Date();
  public date = (this.nowDate.getDate()+7)+'/'+(this.nowDate.getMonth()+1)+'/'+(this.nowDate.getFullYear())
  
  

  ngOnInit(): void {
    this.grand = Math.floor(100000+ Math.random()*3000000);
    return;
    
  }

}
