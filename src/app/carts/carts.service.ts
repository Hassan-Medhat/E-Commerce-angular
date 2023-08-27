import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private httpClient:HttpClient) { }

  createNewCart(Model:any) {
    return this.httpClient.post(`https://dummyjson.com/carts/add` , Model);
  }
}
