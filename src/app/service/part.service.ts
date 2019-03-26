import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Part} from '../model/part';

@Injectable({
  providedIn: 'root'
})
export class PartService {

  baseUrl = 'http://localhost:8080/api/part';

  constructor(private http: HttpClient) { }

  getAllParts() {
    return this.http.get(`${this.baseUrl}/list`);
  }

  create(part: Part) {
    return this.http.post(`${this.baseUrl}/create`, part);
  }

  update(part: Part) {
    return this.http.post(`${this.baseUrl}/edit`, part);
  }

  delete(id: string) {
    return this.http.get(`${this.baseUrl}/delete/${id}`);
  }
}
