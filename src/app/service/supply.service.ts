import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supply} from '../model/supply';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  baseUrl = 'https://parts-supply.herokuapp.com/api/supply';

  constructor(private http: HttpClient) { }

  getAllSupplies() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  create(supply: Supply) {
    return this.http.post(`${this.baseUrl}/create`, supply);
  }

  update(supply: Supply) {
    return this.http.post(`${this.baseUrl}/edit`, supply);
  }

  delete(id: any) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  find(field: string, value: string) {
    return this.http.get(`${this.baseUrl}/find/${field}/${value}`);
  }

  expense(date: string = '') {
    return this.http.get(`${this.baseUrl}/expense/${date}`) as Observable<number>;
  }

  expenseBetween(firstDate: string, secondDate: string) {
    return this.http.get(`${this.baseUrl}/expense/from/${firstDate}/to/${secondDate}`) as Observable<number>;
  }
}
