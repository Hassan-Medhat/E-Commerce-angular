import { Component, OnInit , OnDestroy } from '@angular/core';
import { CartsService } from '../carts.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit , OnDestroy{

  cartProducts:any[] = [];
  total:any = 0;
  success:boolean = false;
  price:number = 0;
  subscription: Subscription;

constructor(private cartsService:CartsService) { }

  ngOnInit():void {
    this.getCartProducts();
    
  }

  getCartProducts() {
    if('cart' in localStorage) {

      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
    }
    this.getCartTotal();
  }

  detectChange() {
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.getCartTotal()
  }

  getCartTotal() {
    this.total = 0;
    for(let price in this.cartProducts) {
      this.total += this.cartProducts[price].item.price * this.cartProducts[price].quantity
    }
  }

  deleteProduct(index:number) {
    this.cartProducts.splice(index , 1);
    localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    this.getCartTotal()
    this.success = false;
  }

  addCart() {
    let products = this.cartProducts.map(item => {
      return {productId:item.item.id , quantity:item.quantity}
    })
    let Model = {
      userId: 5,
      date: new Date(),
      products:products

    }
    this.subscription =  this.cartsService.createNewCart(Model).subscribe(res => {
      this.success = true;
    })
  }


  roundRating(rating:any) {
    rating = Number(rating).toFixed(0);
    return rating;
  }


  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
