import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Rest2Service } from '../user-display/rest2.service';


interface Products {
  id: number
  name: string,
  price: string,
  brand: string,
  img: any
  
}

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  constructor(private restService: Rest2Service, private _https:HttpClient, private cartService: CartService) { }

  prod : Products[] | any
  public filterBrand: any

  searchProduct: any

  public totalItem: number = 0;

  ngOnInit(): void {
    this.getLatestUser()
    this.cartService.getProducts()
    .subscribe(res=> {
      this.totalItem = res.length;
 
    })
    
    this.prod.foreach((a:any)=> {
      Object.assign(a,{quantity:1,total:a.price})
    })
  }

  getLatestUser() {
    this.restService.getAllProduct().subscribe((response)=> {
      this.prod = response
      this.filterBrand = response; 
    })
  }

  addToCart(p:any) {
    this.cartService.addtoCart(p)
  }

  filter(brand:string){
    this.filterBrand = this.prod
    .filter((a:any)=>{
      if(a.brand == brand || brand==''){
        return a;
      }
    })
  }

}

