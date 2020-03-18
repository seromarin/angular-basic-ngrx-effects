import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URI = 'https://reqres.in/api'

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.URI}/users`);
  }

  getUserById(id: number) {
    return this.http.get(`${this.URI}/users/${id}`);
  }
}
