import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supplier} from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  baseUrl = 'https://parts-supply.herokuapp.com/api/supplier';

  constructor(private http: HttpClient) { }

  getAllSuppliers() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  create(supplier: Supplier) {
    return this.http.post(`${this.baseUrl}/create`, supplier);
  }

  update(supplier: Supplier) {
    return this.http.post(`${this.baseUrl}/edit`, supplier);
  }

  delete(id: any) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  find(field: string, value: string) {
    return this.http.get(`${this.baseUrl}/find/${field}/${value}`);
  }
}
