import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supply} from '../model/supply';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  baseUrl = 'http://localhost:8080/api/supply';

  constructor(private http: HttpClient) { }

  getAllSupplies() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  create(supply: Supply) {
    return this.http.post(`${this.baseUrl}/create`, supply);
  }

  update(supply: Supply) {
    return this.http.post(`${this.baseUrl}/update`, supply);
  }

  delete(id: string) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }
}
