import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  // public search = new BehaviorSubject<string>("");

  constructor() {}

 
  
  getProducts(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += (a.total*a.quantity);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
    var cartItem=[...this.productList.getValue()]
    this.productList.getValue().map((a:any, index:any)=>{
      if(product.pId === a.pId){
        cartItem.splice(index,1);
        this.cartItemList = []
        this.productList.next(this.cartItemList);
      }
      this.productList.next(cartItem);
    })
    
    
      // this.cartItemList.map((a:any, index:any)=>{
      //   if(product.productId=== a.productId){
      //     this.cartItemList.splice(index,1);
      //   }
      // })
      // this.productList.next(this.cartItemList);
  }
  
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}