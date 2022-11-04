import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  //! koyarak aslında undefined veya observable<any> tipinde olacak diyoruz.
  // user$:Observable<any> | undefined;
  // yukarıdaki ile aynı
  user$!:Observable<any>;

  constructor(private userService:UserService, private activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit(): void {

   this.user$ = this.userService.getUserDetail((this.activatedRoute.snapshot.params as any).id);

    // this.userService.getUserDetail(this.activatedRoute.snapshot.params['id'])
  }

}
