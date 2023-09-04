import { Component , OnInit , OnDestroy } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription, forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  implements OnInit , OnDestroy {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoWidth: false,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 2000,
    animateIn: true,
    animateOut: true,
    dotsSpeed: 700,
    slideBy: 'page',
    slideTransition: 'ease-out',
    // navText: ['&#8249', '&#8250;'],
    // responsive: {
    //   0: {
    //     items: 1 
    //   },
    //   400: {
    //     items: 2
    //   },
    //   760: {
    //     items: 3
    //   },
    //   1000: {
    //     items: 4
    //   }
    // },
    // nav: true
  }

  
  tech: any;
  personalCare:any;
  homeDecoration:any;
  women:any;
  men:any;



  subscription1: Subscription;
  subscription2: Subscription;
  subscription3: Subscription;
  subscription4: Subscription;
  subscription5: Subscription;

  constructor(private httpClient:HttpClient) { }


  ngOnInit(): void {
    this.getTech(); 
    this.getPersonalCare(); 
    this.getFurniture();   
    this.getWomen();   
    this.getMen();   
  }

  getTech() {
    this.subscription1 = forkJoin([this.httpClient.get(`https://dummyjson.com/products/category/smartphones`)
     ,this.httpClient.get(`https://dummyjson.com/products/category/laptops`) ]).subscribe((data: any) => {
      this.tech = data[0].products.concat(data[1].products);
     })
  }

  getPersonalCare() {
    this.subscription2 = forkJoin([this.httpClient.get(`https://dummyjson.com/products/category/fragrances`)
     ,this.httpClient.get(`https://dummyjson.com/products/category/skincare`) ]).subscribe((data: any) => {
      this.personalCare = data[0].products.concat(data[1].products);
     })
  }

  getFurniture() {
    this.subscription3 = forkJoin([this.httpClient.get(`https://dummyjson.com/products/category/home-decoration`)
     ,this.httpClient.get(`https://dummyjson.com/products/category/furniture`) ,
     this.httpClient.get(`https://dummyjson.com/products/category/lighting`) ]).subscribe((data: any) => {
      this.homeDecoration = data[0].products.concat(data[1].products.concat(data[2].products));
      
     })
  }


  getWomen() {
    this.subscription4 = forkJoin([this.httpClient.get(`https://dummyjson.com/products/category/womens-dresses`)
     ,this.httpClient.get(`https://dummyjson.com/products/category/womens-jewellery`) ,
     this.httpClient.get(`https://dummyjson.com/products/category/womens-bags`) ]).subscribe((data: any) => {
      this.women = data[0].products.concat(data[1].products.concat(data[2].products));
      
     })
  }


  getMen() {
    this.subscription5 = forkJoin([this.httpClient.get(`https://dummyjson.com/products/category/mens-shirts`)
     ,this.httpClient.get(`https://dummyjson.com/products/category/mens-watches`) ,
     this.httpClient.get(`https://dummyjson.com/products/category/sunglasses`) ]).subscribe((data: any) => {
      this.men = data[0].products.concat(data[1].products.concat(data[2].products));
      
     })
  }


  ngOnDestroy(): void {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
      this.subscription3.unsubscribe();
      this.subscription4.unsubscribe();
      this.subscription5.unsubscribe();
  }
}

