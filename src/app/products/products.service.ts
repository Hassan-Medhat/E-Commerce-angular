import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllProducts():Observable <any> {
    return this._HttpClient.get(`https://dummyjson.com/products`)
  }


  getAllCategories():Observable <any> {
    return this._HttpClient.get(`https://dummyjson.com/products/categories`)
  }

  getProductCategory(category:string):Observable <any> {
    return this._HttpClient.get(`https://dummyjson.com/products/category/${category}`)
  }


  getProductById(id:any):Observable <any> {
    return this._HttpClient.get(`https://dummyjson.com/products/${id}`)
  }
}
