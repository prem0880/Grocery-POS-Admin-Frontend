import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private baseUrl = 'http://localhost:8083/api/vendor';

  constructor(private http: HttpClient) { }

  getVendor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createVendor(vendor: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, vendor);
  }

  updateVendor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteVendor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getVendorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
