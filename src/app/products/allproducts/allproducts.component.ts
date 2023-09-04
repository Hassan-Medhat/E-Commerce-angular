import { Component , OnInit  , OnDestroy} from '@angular/core';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit  , OnDestroy{

  AllProducts:any[] = [];
  AllCategories:any[] = [];
  loading:boolean = false;
  cartProducts:any[] = [];

  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;


constructor(private productsService:ProductsService) {

  }

  ngOnInit():void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true;
    this.subscription1 = this.productsService.getAllProducts().subscribe((data)=> {
      this.AllProducts = data.products;
      this.loading = false;
    })
  }


  getCategories() {
    this.loading = true;
    this.subscription2 = this.productsService.getAllCategories().subscribe((data)=> {
      this.AllCategories = data;
      this.loading = false;
    })
  }


getCategory(category:string) {
  this.loading = true;
  this.subscription3 = this.productsService.getProductCategory(category).subscribe((data) => {
    this.AllProducts = data.products;
    this.loading = false;
  })
  
}
  
  
  filterCategory(event:any) {
    let checked = event.target.checked;
    let value = event.target.value;
    (checked) ?  this.getCategory(value) : this.getProducts() ;
    
  }

  addCart(event:any) {
    if('cart' in localStorage) {

      this.cartProducts = JSON.parse(localStorage.getItem('cart')!); 
      let exist = this.cartProducts.find(item => item.item.id === event.item.id) 
      if(exist) {
        
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart' , JSON.stringify(this.cartProducts));
    }
  }


  ngOnDestroy(): void {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
      this.subscription3.unsubscribe();
  }

}
