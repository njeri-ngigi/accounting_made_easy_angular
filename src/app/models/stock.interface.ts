import { ChartPoint } from 'chart.js';

export interface IStock {
  id: number;
  stock_type: string;
  price: number;
  quality: string;
  quantity: number;
  designer: string;
  description: string;
  stock_image_url: string;
  fabric: string;
  createdAt: string;
  updatedAt: string;
}
