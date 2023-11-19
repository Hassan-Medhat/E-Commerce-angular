import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient:HttpClient) { }

  getTech() {
    const smartphones = this.httpClient.get(`https://dummyjson.com/products/category/smartphones`);
    const laptops = this.httpClient.get(`https://dummyjson.com/products/category/laptops`);

    return forkJoin([smartphones , laptops])
  }

  getPersonalCare() {
    const fragrances = this.httpClient.get(`https://dummyjson.com/products/category/fragrances`);
    const skincare = this.httpClient.get(`https://dummyjson.com/products/category/skincare`);

    return forkJoin([fragrances , skincare])
  }

  getFurniture() {
    const homeDecoration = this.httpClient.get(`https://dummyjson.com/products/category/home-decoration`);
    const furniture = this.httpClient.get(`https://dummyjson.com/products/category/furniture`);
    const lighting = this.httpClient.get(`https://dummyjson.com/products/category/lighting`);

    return forkJoin([homeDecoration , furniture , lighting])
  }

  getWomen() {
    const womensDresses = this.httpClient.get(`https://dummyjson.com/products/category/womens-dresses`);
    const womensJewellery = this.httpClient.get(`https://dummyjson.com/products/category/womens-jewellery`);
    const womensBags = this.httpClient.get(`https://dummyjson.com/products/category/womens-bags`);

    return forkJoin([womensDresses , womensJewellery , womensBags])
  }

  getMen() {
    const mensShirts = this.httpClient.get(`https://dummyjson.com/products/category/mens-shirts`);
    const mensWatches = this.httpClient.get(`https://dummyjson.com/products/category/mens-watches`);
    const sunglasses = this.httpClient.get(`https://dummyjson.com/products/category/sunglasses`);

    return forkJoin([mensShirts , mensWatches , sunglasses])
  }

  


}
