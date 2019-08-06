import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, SingleDataSet, Color } from 'ng2-charts';
import { StockService } from 'src/app/services/stock.service';
import { IStock } from 'src/app/models/stock.interface';

@Component({
  selector: 'app-stock-home',
  templateUrl: './stock-home.component.html',
  styleUrls: ['./stock-home.component.scss']
})
export class StockHomeComponent implements OnInit {
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLabels: Label[] = [];
  doughnutChartData: any[] = [];
  doughnutChartColors: Color[] = [{
    backgroundColor: ['#ABEBC6', '#2471A3', '#E74C3C', '#F0B27A']
  }];
  doughnutChartOptions: any = {
    legend: { position: 'bottom' }
  };

  stocks: IStock[] = [];
  sanitizedStock: IStock[] = [];

  constructor(private service: StockService) { }

  ngOnInit() {
    this.service.getAllStock().subscribe((data) => {
      this.stocks = data;
      data.map(({stock_type, quantity}) => {
        const index = this.doughnutChartLabels.indexOf(stock_type);
        if (index < 0) {
          this.doughnutChartLabels.push(stock_type);
          this.doughnutChartData.push(quantity);
        } else {
          this.doughnutChartData[index] = this.doughnutChartData[index] + quantity;
        }
      });
    });
  }
}
