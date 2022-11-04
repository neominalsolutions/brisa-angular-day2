import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // service sadece veriyi componente gönderecek şekilde tanımlanır. 
  // içerisinde herhangi bir html dosya olmamak ile birlikte herhangi bir component çağırılmaz
  // componentler service üzerinden veriyi alır.
  constructor(private http:HttpClient) { }

  getAllUsers() {
    // $"{name}{surname} adında kullanıcı"
    // c# formatı

    return  this.http.get(`https://jsonplaceholder.typicode.com/users`) as Observable<any[]>;
  }

  getUserDetail(id:string) {
    return  this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`) as Observable<any>;
  }
}
