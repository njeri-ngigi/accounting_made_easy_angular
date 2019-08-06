import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { stockUrls } from '../utils/urls';
import { IStock} from '../models/stock.interface';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  getAllStock() {
    return this.http.get<IStock[]>(stockUrls.stock);
  }
}
