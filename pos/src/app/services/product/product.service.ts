import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8083/api/product';


  constructor(private http : HttpClient) { }

  createProduct(product:Product){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.post(`${this.baseUrl}`, product,{headers, responseType : 'text'} );
  }

  getAllProduct() : Observable<any>{
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.get<Product>(`http://localhost:8083/api/products`);
  }

  deleteProduct(id:number,cid:number){
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.delete(`${this.baseUrl}/${id}/category/${cid}`, { headers, responseType: 'text'});
  }

  updateProduct(id:number,product:Product){
    console.log(product);
    const headers =new HttpHeaders().set('Content_Type', 'text/plain ;charset=utf-8');
    return this.http.put(`${this.baseUrl}/${id}`, product,{ headers, responseType: 'text'});
  }
  

}
export class Product{
  id?:number;
  name?:string;
  image?:string;
  mrp?:number;
  brand?:string;
  description?:string;
  stock?:number;
  tax?:number;
  category:any;
}
