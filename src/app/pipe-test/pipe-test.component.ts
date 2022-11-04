import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.scss']
})
export class PipeTestComponent implements OnInit {

  order:any = {
    total:15000,
    orderDate:new Date(),
    shipAdrress: 'Birsa',
    orderStatus:'1001'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
