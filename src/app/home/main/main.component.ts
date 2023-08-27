import { Component , OnInit , OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';




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

  
  tech:any [] =[];
  personalCare:any [] = [];
  furniture:any [] = [] ;
  sunglasses:any [] =[] ;

  subscription1: Subscription = new Subscription;
  subscription2: Subscription = new Subscription;
  subscription3: Subscription = new Subscription;
  subscription4: Subscription = new Subscription;

  constructor(private productsService:ProductsService) { }


  ngOnInit(): void {
    this.getTech(); 
    this.getPersonalCare();   
    this.getFurniture();   
    this.getSunglasses();   
  }

  getTech() {
    this.subscription1 = this.productsService.getTech().subscribe((data) => {
      this.tech = data.products.slice(0,10);
    });
  }

  getPersonalCare() {
    this.subscription2 =  this.productsService.getPersonalCare().subscribe((data) => {
      this.personalCare = data.products.slice(10,20);
    });
  }

  getFurniture() {
    this.subscription3 = this.productsService.getFurniture().subscribe((data) => {
      this.furniture = data.products;
    })
  }


  getSunglasses() {
    this.subscription4 = this.productsService.getSunglasses().subscribe((data) => {
      this.sunglasses = data.products;
    })
  }


  ngOnDestroy(): void {
      this.subscription1.unsubscribe();
      this.subscription2.unsubscribe();
      this.subscription3.unsubscribe();
      this.subscription4.unsubscribe();
  }
}

