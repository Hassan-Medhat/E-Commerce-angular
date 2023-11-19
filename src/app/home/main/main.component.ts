import { Component , OnInit  } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { take } from 'rxjs/operators';
import { HomeService } from '../home.service';







@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent  implements OnInit  {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoWidth: true,
    navSpeed: 700,
    // autoplay: true,
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



  

  constructor(private homeService:HomeService) { }


  ngOnInit(): void {
    this.getTech(); 
    this.getPersonalCare();  
    this.getFurniture();   
    this.getWomen();   
    this.getMen();   
  }

  getTech() {
    this.homeService.getTech().pipe(take(1)).subscribe((data :any) => {
      this.tech = data[0].products.concat(data[1].products);
    })
  }

  getPersonalCare() {
    this.homeService.getPersonalCare().pipe(take(1)).subscribe((data :any) => {
      this.personalCare = data[0].products.concat(data[1].products);
    })
  }

  getFurniture() {
    this.homeService.getFurniture().pipe(take(1)).subscribe((data :any) => {
      this.homeDecoration = data[0].products.concat(data[1].products.concat(data[2].products));
    })
  }


  getWomen() {
    this.homeService.getWomen().pipe(take(1)).subscribe((data :any) => {
      this.women = data[0].products.concat(data[1].products.concat(data[2].products));
    })
  }


  getMen() {
    this.homeService.getMen().pipe(take(1)).subscribe((data :any) => {
      this.men = data[0].products.concat(data[1].products.concat(data[2].products));
    })
  }

}

