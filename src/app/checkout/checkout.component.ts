import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public grand !: number;

  public products : any = [];

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.grand = this.cartService.getTotalPrice();
    return;
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
