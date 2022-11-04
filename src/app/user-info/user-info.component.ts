import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  // built-in services meta tag düzenleme, yönlendirme, aktif route bulma, form üzerinde işlem yap vs..
  // ActivatedRoute şuan istek atılan route ait param değerlerini okumamız sağlayan service
  // DI yöntemi var servicler component constructure tanımlanır.
  constructor(private activeRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    const param = this.activeRoute.snapshot.params;
    // istek atılan paramları object olarak ky value pair verir.

    console.log('param', param);


    // private ile sadece ts dosyasında bu service erişebilirim.
    // bu componente ait service htmlden de erişmek için public yaparız.
    // const activeRoute = new ActivatedRoute();
    // yukarıdaki gibi bir service bağlanıp instance almak yerine contructor ilgili service tanımlamak yeterli.
   
  }

  saveAndRedirect(){
    // kayıt attığımızı varsayalım
    // angularda ts dosyasında başka bir componente yönlendirme yapmak için ise router service kullanırız.
    // this.router.navigateByUrl('home');

    // ikinci kullanım
    this.router.navigate(['home']);

  }

}
