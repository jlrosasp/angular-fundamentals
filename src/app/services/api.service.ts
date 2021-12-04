import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  newProduct(params:any) {
    return this.http.post('http://localhost:3000/v1/products/newProduct', params);
  }

  getProducts(params:any) {
    return this.http.get('http://localhost:3000/v1/products/newProduct', params);
  }

  getProductById(id: string) {
    return this.http.get(`http://localhost:3000/v1/products/getProductById/${id}`);
  }
}
