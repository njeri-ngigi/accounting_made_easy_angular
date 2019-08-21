import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.scss']
})
export class StockCardComponent implements OnInit {

  @Input() stockQuantity = 0;
  @Input() stockName = '';
  @Input() stockImageUrls: string[] = [];
  @Input() stockDesigners: string[] = [];
  @Input() stockFabrics: string[] = [];
  designers = '';
  fabrics = '';

  constructor() { }

  capitalizeAndJoin = (arrayObject: string[]): string => [
    arrayObject.map((item) => `${item.charAt(0).toUpperCase()}${item.slice(1)}`)
  ].join(', ')

  ngOnInit() {
    this.designers = this.capitalizeAndJoin([...new Set(this.stockDesigners)]);
    this.fabrics = this.capitalizeAndJoin([...new Set(this.stockFabrics)]);
  }

}
