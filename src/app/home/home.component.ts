import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
   const data$ = this.userService.getAllUsers();
  }

}
