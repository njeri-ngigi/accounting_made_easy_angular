import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IStock } from 'src/app/models/stock.interface';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss']
})
export class StockViewComponent implements OnInit {
  @Input() stockData: IStock;
  @Output() viewChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  switchToHome() {
    this.viewChanged.emit();
  }
}
