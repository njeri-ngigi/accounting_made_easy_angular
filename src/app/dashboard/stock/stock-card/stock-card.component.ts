import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {
  stocks = [
    {url: 'https://images.pexels.com/photos/417059/pexels-photo-417059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
    {url: 'https://images.pexels.com/photos/417059/pexels-photo-417059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'},
    {url: 'https://images.pexels.com/photos/417059/pexels-photo-417059.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
