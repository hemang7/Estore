import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  inc(item:any){
    item.quantity=item.quantity+1;
    this.grandTotal=this.cartService.getTotalPrice();
  }
  dec(item:any){
    if(item.quantity!=1){
    item.quantity=item.quantity-1; 
    this.grandTotal=this.cartService.getTotalPrice();
    }
    else{
      this.removeItem(item);
      this.grandTotal=this.cartService.getTotalPrice();
    }
    
  }

}