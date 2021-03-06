import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock.service';
import { IStock } from 'src/app/models/stock.interface';
import { totalmem } from 'os';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.scss']
})
export class StockHomeComponent implements OnInit {
  allStockDataByStockType = {};
  stockTypes = [];
  stockImageUrls = [];

  stocks: IStock[] = [];

  allStockView = true;
  singleStockView = false;
  currentStockView = {};
  stockTypeTabId: string;

  constructor(private service: StockService) { }

  ngOnInit() {
    this.service.getAllStock().subscribe((data) => {
      this.stocks = data;
      data.map((item) => {
        const { stock_type } = item;
        if (!(stock_type in this.allStockDataByStockType)) {
          this.allStockDataByStockType[stock_type] = [item];
        } else {
          this.allStockDataByStockType[stock_type].push(item);
        }

        this.stockTypes = [...Object.keys(this.allStockDataByStockType)];
      });
    });
  }

  toggleStockView(view: boolean, stockType: string) {
    this.stockTypeTabId = stockType;
    if (stockType) { this.currentStockView = this.allStockDataByStockType[stockType]; }

    this.singleStockView = view;
    this.allStockView = !view;
  }

  getStockQuantity(stockType: string) {
    const stockItem = this.allStockDataByStockType[stockType];
    if (stockItem.length > 1) {
      const newStockObject = stockItem.reduce((total, next) => ({
        ...total, quantity: total.quantity + next.quantity
      }));
      return newStockObject.quantity;
    }
    return  stockItem[0].quantity;
  }

  getStockFieldString(stockType: string, field: string) {
    const stockItem = this.allStockDataByStockType[stockType];
    if (stockItem.length > 1) {
       const stockFieldArray = [...new Set(stockItem.map(item => item[field]))];
       return stockFieldArray.join(', ');
    }
    return  stockItem[0][field];
  }
}
