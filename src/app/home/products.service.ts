import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }



    getTech():Observable <any> {
      return this.httpClient.get(`https://dummyjson.com/products`)
    }

    getPersonalCare():Observable <any> {
      return this.httpClient.get(`https://dummyjson.com/products`)
    }

    getFurniture():Observable <any> {
      return this.httpClient.get(`https://dummyjson.com/products/category/furniture`);
    }


    getSunglasses():Observable <any> {
      return this.httpClient.get(`https://dummyjson.com/products/category/sunglasses`);
    }

  
}
