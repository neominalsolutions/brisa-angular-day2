import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { catchError, filter, map, Observable, of, tap } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  // private http:HttpClient bu service ile uzak makinadan bir request de bulunabiliriz. (httpget,httpost,httput,httpatch,httpdelete)
  // fetch yerine kullanıyoruz.

  constructor(private http:HttpClient, private userService:UserService) { }
  ngOnDestroy(): void {
    // component HTML domdan kaldırılınca çalışır.
    // arka planda çalışan kodları temizleriz.
    // genelde clearInterval gibi durumlar için rxjs kütüphanesi kullanılıhyorsa subscriptionları unsubscribe etmek için kullanılır.
    // websocket bağlantılarını koparmamız lazım
    // backend tarafta ise dispose ve garbage collector kullanımına denk gelir.
    // ya *ngIf ile domdan kaldırılırken yada bir sayfa değişikliği sonucu component router outlet üzerinden değiştiğinde ilk burası tetiklenir.
  }

  // undefined herhangi bir atama yapılmamış bir object array tanımladık
  users!: any[];
  users$!:Observable<any[]>;

  ngOnInit(): void {
    // this.fetchSample();
    //this.httpRxJs();
    //this.httpClientPromise();
    
    // Doğru kullanım.

    // 1. kullanım şekli subscribe ile
    // 2. kullanım şekli async operatör ile

    // 1.yöntem
    // veri olduğu gibi ekrana basılacak ise tercih edilir.
    this.users$ = this.userService.getAllUsers();

    // 2. yöntem
    // veri üzerinde oynama durumu varsa tercih edilir.
    this.userService.getAllUsers().subscribe((data:any) => {
      this.users = data;
    })


  
  }

  httpRxJs(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      {
      next:(data:any)=> {
        //then
        this.users = data;
      },
      error:(err)=> {
        //catch
        console.log('err', err);
      },
      complete:()=>{
       // finally
       // reject de olsa resolve de olsa finally çalışır.
      }
      
      });
  }

  httpClientPromise(){
    this.http.get('https://jsonplaceholder.typicode.com/users').toPromise().then((response:any) => {
      this.users = response;
    }).catch(err => {
      console.log('network-error',err);
    })
  }

  fetchSample() {
    // component ilk açıldığında 1 seferlik çalışan bir method.
    // genelde apidan veri çekme işlemlerini burada yaparız.
    console.log('ngOnInit');

    // let userRes:any[] = [];
    // console.log('1.adım')
    // promise ile yazılmış bir Javascript API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        console.log('data', json);
        this.users = json;
        // userRes = json;
        console.log('2.adım')
      }
      )
      .catch(err => {
        console.log('network-error', err);
      })


    // this.users = userRes;
    // console.log('3.adım')
  }

}
