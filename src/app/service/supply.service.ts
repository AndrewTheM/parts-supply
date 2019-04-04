import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Supply} from '../model/supply';
import {Observable} from 'rxjs';

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
    return this.http.post(`${this.baseUrl}/edit`, supply);
  }

  delete(id: string) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }

  find(field: string, value: string) {
    return this.http.get(`${this.baseUrl}/find/${field}/${value}`);
  }

  income(date: string = '') {
    return this.http.get(`${this.baseUrl}/income/${date}`) as Observable<number>;
  }

  incomeBetween(firstDate: string, secondDate: string) {
    return this.http.get(`${this.baseUrl}/income/from/${firstDate}/to/${secondDate}`) as Observable<number>;
  }
}
