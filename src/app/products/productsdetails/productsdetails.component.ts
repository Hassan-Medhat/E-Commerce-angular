import { Component, OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss']
})
export class ProductsdetailsComponent implements OnInit , OnDestroy{

  data:any = {};
  id:any
  loading:boolean = false;
  subscription: Subscription;

  constructor(private activatedRoute:ActivatedRoute , private productsService:ProductsService){
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
  }

  ngOnInit():void
 {
  this.getProduct();
 }

  getProduct() {
    this.loading = true;
    this.subscription = this.productsService.getProductById(this.id).subscribe((res) => {
      this.data = res;
      this.loading = false;
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
  

}
